window.MathJax = {
  tex: {
    inlineMath: [['\\(', '\\)']],
    displayMath: [['\\[', '\\]']]
  },
  svg: {
    fontCache: 'global'
  },
  options: {
    renderActions: {
      addMenu: []
    }
  }
};

function typesetMath() {
  if (window.MathJax && MathJax.typesetPromise) {
    MathJax.typesetPromise();
  }
}

window.addEventListener('DOMContentLoaded', typesetMath);

// MkDocs Material instant navigation
if (typeof document$ !== 'undefined' && document$.subscribe) {
  document$.subscribe(() => typesetMath());
} else {
  document.addEventListener('mkdocs:page-ready', typesetMath);
}
