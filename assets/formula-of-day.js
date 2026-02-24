(function () {
  let formulasPromise = null;

  function getScriptElement() {
    return document.currentScript || Array.from(document.scripts).find((s) => {
      const src = s.getAttribute("src") || "";
      return src.includes("formula-of-day.js");
    });
  }

  function getSiteRootPath() {
    const script = getScriptElement();
    if (!script) return "/";
    try {
      const url = new URL(script.src, window.location.href);
      return url.pathname.replace(/assets\/formula-of-day\.js$/, "");
    } catch (_err) {
      return "/";
    }
  }

  function normalizePath(pathname) {
    if (!pathname) return "/";
    let p = pathname;
    p = p.replace(/index\.html$/, "");
    if (!p.endsWith("/")) p += "/";
    return p;
  }

  function getHomePathFromNav() {
    const links = Array.from(document.querySelectorAll("a[href]"));
    for (const link of links) {
      const text = (link.textContent || "").trim();
      if (text !== "Home") continue;
      try {
        const url = new URL(link.href, window.location.href);
        return normalizePath(url.pathname);
      } catch (_err) {
        continue;
      }
    }
    return null;
  }

  function isHomePage() {
    const current = normalizePath(window.location.pathname);
    const homePath = getHomePathFromNav();
    if (homePath) return current === homePath;
    const root = normalizePath(getSiteRootPath());
    return current === root;
  }

  function getFormulas() {
    if (!formulasPromise) {
      const script = getScriptElement();
      const dataUrl = script
        ? new URL("formulas.json", script.src).toString()
        : "/assets/formulas.json";
      formulasPromise = fetch(dataUrl, { cache: "no-cache" })
        .then((r) => (r.ok ? r.json() : []))
        .catch(() => []);
    }
    return formulasPromise;
  }

  function pickDeterministicDailyFormula(formulas) {
    if (!Array.isArray(formulas) || formulas.length === 0) return null;
    const now = new Date();
    const utcMidnight = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
    const dayNumber = Math.floor(utcMidnight / 86400000);
    return {
      record: formulas[dayNumber % formulas.length],
      dateStr: formatUtcDateMMDDYYYY(new Date(utcMidnight)),
    };
  }

  function formatUtcDateMMDDYYYY(date) {
    const mm = String(date.getUTCMonth() + 1).padStart(2, "0");
    const dd = String(date.getUTCDate()).padStart(2, "0");
    const yyyy = String(date.getUTCFullYear());
    return mm + "-" + dd + "-" + yyyy;
  }

  function findArticleContainer() {
    return (
      document.querySelector(".md-content__inner.md-typeset") ||
      document.querySelector(".md-content__inner") ||
      document.querySelector("article")
    );
  }

  function toSiteHref(route) {
    const homePath = getHomePathFromNav() || normalizePath(getSiteRootPath());
    const rootTrimmed = homePath.endsWith("/") ? homePath.slice(0, -1) : homePath;
    return rootTrimmed + route;
  }

  function buildBanner(pick) {
    const wrap = document.createElement("section");
    wrap.className = "formula-of-day-banner";

    const eyebrow = document.createElement("div");
    eyebrow.className = "formula-of-day-eyebrow";
    eyebrow.textContent = "Formula of the Day";
    wrap.appendChild(eyebrow);

    const meta = document.createElement("div");
    meta.className = "formula-of-day-meta";
    meta.textContent = "Formula of the day: " + pick.dateStr;
    wrap.appendChild(meta);

    const title = document.createElement("a");
    title.className = "formula-of-day-title";
    title.href = toSiteHref(pick.record.route);
    title.textContent = pick.record.title + " (" + pick.record.category + ")";
    wrap.appendChild(title);

    const formula = document.createElement("div");
    formula.className = "formula-of-day-math";
    formula.textContent = pick.record.formula_markdown || "";
    wrap.appendChild(formula);

    return wrap;
  }

  function typesetMath(container) {
    const mathJax = window.MathJax;
    if (mathJax && typeof mathJax.typesetPromise === "function") {
      mathJax.typesetPromise([container]).catch(() => {});
      return;
    }
    window.addEventListener(
      "load",
      function () {
        if (window.MathJax && typeof window.MathJax.typesetPromise === "function") {
          window.MathJax.typesetPromise([container]).catch(() => {});
        }
      },
      { once: true }
    );
  }

  async function renderFormulaOfDay() {
    const article = findArticleContainer();
    if (!article) return;

    const existing = article.querySelector(".formula-of-day-banner");
    if (existing) existing.remove();

    if (!isHomePage()) return;

    const formulas = await getFormulas();
    const pick = pickDeterministicDailyFormula(formulas);
    if (!pick) return;

    const banner = buildBanner(pick);
    article.prepend(banner);
    typesetMath(banner);
  }

  function subscribePageChanges() {
    if (typeof document$ !== "undefined" && document$.subscribe) {
      document$.subscribe(() => {
        renderFormulaOfDay();
      });
    } else {
      document.addEventListener("mkdocs:page-ready", renderFormulaOfDay);
      window.addEventListener("DOMContentLoaded", renderFormulaOfDay);
    }
  }

  subscribePageChanges();
})();
