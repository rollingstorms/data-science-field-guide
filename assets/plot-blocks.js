(function () {
  const DEFAULTS = {
    width: null,
    height: 320,
    xmin: -5,
    xmax: 5,
    ymin: -5,
    ymax: 5,
    grid: true,
  };

  function toNumber(value, fallback) {
    const n = Number(value);
    return Number.isFinite(n) ? n : fallback;
  }

  function toBoolean(value, fallback) {
    if (typeof value !== "string") return fallback;
    const v = value.trim().toLowerCase();
    if (["true", "1", "yes", "on"].includes(v)) return true;
    if (["false", "0", "no", "off"].includes(v)) return false;
    return fallback;
  }

  function normalizeExpression(expr) {
    return String(expr || "")
      .replace(/\bpi\b/g, "PI")
      .replace(/π/g, "PI");
  }

  function splitList(value) {
    return String(value || "")
      .split("|")
      .map((s) => s.trim())
      .filter(Boolean);
  }

  function parseNumberList(value) {
    return splitList(value).map((s) => Number(s)).filter((n) => Number.isFinite(n));
  }

  function parsePlotBlock(text) {
    const lines = String(text || "")
      .split(/\r?\n/)
      .map((line) => line.trim());

    const config = {};
    const extras = [];

    for (const line of lines) {
      if (!line || line.startsWith("#")) continue;
      const idx = line.indexOf(":");
      if (idx === -1) {
        extras.push(line);
        continue;
      }
      const key = line.slice(0, idx).trim();
      const value = line.slice(idx + 1).trim();
      if (!key) continue;
      config[key] = value;
    }

    if (!config.fn && !config.fns && extras.length === 1) {
      config.fn = extras[0];
    }
    if (!config.fn && config.expr) {
      config.fn = config.expr;
    }

    const colors = splitList(config.colors);
    const labels = splitList(config.labels);
    const mode = (config.type || config.plot_type || "line").trim().toLowerCase();
    const xs = parseNumberList(config.xs);
    const ys = parseNumberList(config.ys);

    const parsed = {
      mode,
      title: config.title || "",
      width: config.width ? toNumber(config.width, null) : DEFAULTS.width,
      height: toNumber(config.height, DEFAULTS.height),
      xmin: toNumber(config.xmin, DEFAULTS.xmin),
      xmax: toNumber(config.xmax, DEFAULTS.xmax),
      ymin: toNumber(config.ymin, DEFAULTS.ymin),
      ymax: toNumber(config.ymax, DEFAULTS.ymax),
      grid: toBoolean(config.grid, DEFAULTS.grid),
      raw: config,
    };

    if (mode === "bars") {
      if (xs.length === 0 || ys.length === 0 || xs.length !== ys.length) {
        throw new Error("bars mode requires `xs:` and `ys:` with equal-length `|`-separated numeric lists");
      }
      parsed.bars = xs.map((x, idx) => ({
        x,
        y: ys[idx],
        color: colors[idx] || config.color || undefined,
        title: labels[idx] || undefined,
      }));
      return parsed;
    }

    const seriesExprs = config.fns ? splitList(config.fns) : (config.fn ? [config.fn] : []);
    if (seriesExprs.length === 0) {
      throw new Error("plot block requires `fn:` or `fns:` (or a single bare expression line)");
    }

    return {
      ...parsed,
      series: seriesExprs.map((expr, idx) => ({
        fn: normalizeExpression(expr),
        color: colors[idx] || undefined,
        title: labels[idx] || undefined,
      })),
    };
  }

  function findCodeBlocks() {
    return Array.from(
      document.querySelectorAll(
        ".md-typeset pre > code.language-plot, .md-typeset pre > code.language-function-plot"
      )
    );
  }

  function renderError(pre, message) {
    let note = pre.nextElementSibling;
    if (!note || !note.classList.contains("plot-block-error")) {
      note = document.createElement("div");
      note.className = "plot-block-error";
      pre.insertAdjacentElement("afterend", note);
    }
    note.textContent = "Plot render error: " + message;
  }

  function clearError(pre) {
    const note = pre.nextElementSibling;
    if (note && note.classList.contains("plot-block-error")) note.remove();
  }

  function buildFigure(parsed, pre) {
    const figure = document.createElement("figure");
    figure.className = "plot-block-figure";

    const mount = document.createElement("div");
    mount.className = "plot-block-canvas";
    figure.appendChild(mount);

    if (parsed.title) {
      const caption = document.createElement("figcaption");
      caption.className = "plot-block-caption";
      caption.textContent = parsed.title;
      figure.appendChild(caption);
    }

    pre.dataset.plotRendered = "1";
    pre.style.display = "none";
    pre.insertAdjacentElement("afterend", figure);

    return { figure, mount };
  }

  function getOrCreateFigure(parsed, pre) {
    let figure = pre.nextElementSibling;
    if (figure && figure.classList.contains("plot-block-figure")) {
      const mount = figure.querySelector(".plot-block-canvas");
      if (mount) {
        mount.innerHTML = "";
        const caption = figure.querySelector(".plot-block-caption");
        if (caption) caption.textContent = parsed.title || "";
        return { figure, mount };
      }
    }
    return buildFigure(parsed, pre);
  }

  function renderPlot(pre) {
    const functionPlot =
      typeof window.functionPlot === "function"
        ? window.functionPlot
        : window.functionPlot && typeof window.functionPlot.default === "function"
          ? window.functionPlot.default
          : null;

    if (!functionPlot) {
      renderError(pre, "function-plot library not loaded");
      return;
    }

    const parsed = parsePlotBlock(pre.textContent || "");
    clearError(pre);
    const { mount } = getOrCreateFigure(parsed, pre);

    const parentWidth = pre.parentElement ? pre.parentElement.clientWidth : 0;
    const width = parsed.width || Math.max(280, Math.min(760, parentWidth || 560));

    const opts = {
      target: mount,
      width,
      height: parsed.height,
      grid: parsed.grid,
      xAxis: { domain: [parsed.xmin, parsed.xmax] },
      yAxis: { domain: [parsed.ymin, parsed.ymax] },
      data: (parsed.series || []).map((s) => {
        const item = {
          fn: s.fn,
          graphType: "polyline",
          sampler: "builtIn",
        };
        if (s.color) item.color = s.color;
        if (s.title) item.title = s.title;
        return item;
      }),
    };

    if (parsed.mode === "bars") {
      renderBars(mount, parsed, width);
      return;
    }

    functionPlot(opts);
  }

  function renderBars(mount, parsed, width) {
    if (typeof window.d3 === "undefined") {
      throw new Error("d3 library not loaded");
    }

    const d3 = window.d3;
    const margin = { top: 10, right: 14, bottom: 28, left: 36 };
    const innerWidth = Math.max(160, width - margin.left - margin.right);
    const innerHeight = Math.max(120, parsed.height - margin.top - margin.bottom);

    const svg = d3
      .select(mount)
      .append("svg")
      .attr("width", width)
      .attr("height", parsed.height)
      .attr("viewBox", `0 0 ${width} ${parsed.height}`);

    const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

    const xDomain = [parsed.xmin, parsed.xmax];
    const yDomain = [parsed.ymin, parsed.ymax];
    const x = d3.scaleLinear().domain(xDomain).range([0, innerWidth]);
    const y = d3.scaleLinear().domain(yDomain).range([innerHeight, 0]);

    if (parsed.grid) {
      g.append("g")
        .attr("opacity", 0.16)
        .call(d3.axisLeft(y).ticks(5).tickSize(-innerWidth).tickFormat(() => ""))
        .select(".domain")
        .remove();
    }

    const minStep = parsed.bars.length > 1
      ? d3.min(parsed.bars.slice(1).map((b, i) => Math.abs(b.x - parsed.bars[i].x))) || 1
      : (parsed.xmax - parsed.xmin) / 4 || 1;
    const barPixelWidth = Math.max(4, Math.min(40, Math.abs(x(xDomain[0] + minStep) - x(xDomain[0])) * 0.8));

    g.selectAll("rect.plot-bar")
      .data(parsed.bars)
      .enter()
      .append("rect")
      .attr("class", "plot-bar")
      .attr("x", (d) => x(d.x) - barPixelWidth / 2)
      .attr("y", (d) => y(Math.max(0, d.y)))
      .attr("width", barPixelWidth)
      .attr("height", (d) => Math.abs(y(d.y) - y(0)))
      .attr("fill", (d) => d.color || "#ff6b2c")
      .attr("stroke", "#111111")
      .attr("stroke-width", 1);

    g.append("g")
      .attr("transform", `translate(0,${y(0)})`)
      .call(d3.axisBottom(x).ticks(Math.min(8, parsed.bars.length + 1)));

    g.append("g").call(d3.axisLeft(y).ticks(5));
  }

  function renderPlots() {
    for (const code of findCodeBlocks()) {
      const pre = code.closest("pre");
      if (!pre) continue;
      try {
        renderPlot(pre);
      } catch (err) {
        const msg = err && err.message ? err.message : String(err);
        renderError(pre, msg);
      }
    }
  }

  function subscribePageChanges() {
    if (typeof document$ !== "undefined" && document$.subscribe) {
      document$.subscribe(renderPlots);
    } else {
      document.addEventListener("mkdocs:page-ready", renderPlots);
      window.addEventListener("DOMContentLoaded", renderPlots);
    }
  }

  subscribePageChanges();
})();
