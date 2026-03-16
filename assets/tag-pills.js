(function () {
  let tagsIndexPromise = null;

  function getScriptElement() {
    return document.currentScript || Array.from(document.scripts).find((s) => {
      const src = s.getAttribute("src") || "";
      return src.includes("tag-pills.js");
    });
  }

  function getSiteRootPath() {
    const script = getScriptElement();
    if (!script) return "/";
    try {
      const url = new URL(script.src, window.location.href);
      return url.pathname.replace(/assets\/tag-pills\.js$/, "");
    } catch (_err) {
      return "/";
    }
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

  function toSiteHref(route) {
    const homePath = getHomePathFromNav() || normalizePath(getSiteRootPath());
    const rootTrimmed = homePath.endsWith("/") ? homePath.slice(0, -1) : homePath;
    return rootTrimmed + route;
  }

  function getTagsIndex() {
    if (!tagsIndexPromise) {
      const script = getScriptElement();
      const dataUrl = script
        ? new URL("card-tags.json", script.src).toString()
        : "/assets/card-tags.json";
      tagsIndexPromise = fetch(dataUrl, { cache: "no-cache" })
        .then((r) => (r.ok ? r.json() : {}))
        .catch(() => ({}));
    }
    return tagsIndexPromise;
  }

  function normalizePath(pathname) {
    if (!pathname) return "/";
    let p = pathname;
    if (!p.startsWith("/")) p = "/" + p;
    p = p.replace(/index\.html$/, "");
    if (!p.endsWith("/")) p += "/";
    return p;
  }

  function findArticleContainer() {
    return (
      document.querySelector(".md-content__inner.md-typeset") ||
      document.querySelector(".md-content__inner") ||
      document.querySelector("article")
    );
  }

  function shouldRenderOnPath(path) {
    return path.startsWith("/cards/") && !path.startsWith("/index/");
  }

  function buildTagFooter(tags) {
    const wrap = document.createElement("div");
    wrap.className = "card-tags-footer";

    const label = document.createElement("div");
    label.className = "card-tags-label";
    label.textContent = "Tags";
    wrap.appendChild(label);

    const row = document.createElement("div");
    row.className = "card-tags-row";

    for (const tag of tags) {
      const pill = document.createElement("a");
      pill.className = "card-tag-pill";
      pill.textContent = tag;
      pill.href = toSiteHref("/index/TAGS/#" + slugifyHeading(tag));
      row.appendChild(pill);
    }

    wrap.appendChild(row);
    return wrap;
  }

  function slugifyHeading(text) {
    return String(text)
      .trim()
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
  }

  async function renderTagPills() {
    const path = normalizePath(window.location.pathname);
    const article = findArticleContainer();
    if (!article) return;

    const existing = article.querySelector(".card-tags-footer");
    if (existing) existing.remove();

    if (!shouldRenderOnPath(path)) return;

    const index = await getTagsIndex();
    const record = index[path];
    if (!record || !Array.isArray(record.tags) || record.tags.length === 0) return;

    article.appendChild(buildTagFooter(record.tags));
  }

  function subscribePageChanges() {
    if (typeof document$ !== "undefined" && document$.subscribe) {
      document$.subscribe(() => {
        renderTagPills();
      });
    } else {
      document.addEventListener("mkdocs:page-ready", renderTagPills);
      window.addEventListener("DOMContentLoaded", renderTagPills);
    }
  }

  subscribePageChanges();
})();
