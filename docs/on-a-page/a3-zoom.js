/* ================================================================
   Maxxim — On-a-Page zoom.
   Inlined verbatim alongside a3-framework.css in every On-a-Page
   artifact. Finds every scaled-down sheet on the page (the elements
   that wrap a `.sheet`: `.stage` in standalone/merged-pack contexts,
   `.oap-stage` when embedded in a client pack), and adds a small
   "Zoom" button that enlarges it full-viewport, scrollable and
   pannable — the print scale is too dense to read comfortably on
   screen without this.

   Deliberately does NOT clone or relocate the `.sheet` element: several
   delivery contexts scope the sheet's own CSS to an ancestor wrapper
   (`.pg .box`, `#pg-discover .box-label`, `#oap-deploy table.mini`, …),
   so moving it out of that ancestry — even into a same-page overlay —
   would silently drop all of its styling. Instead the `.stage`/
   `.oap-stage` wrapper itself becomes the full-viewport, scrollable
   "lightbox" in place, and the sheet is temporarily re-parented one
   level down into a small measurement wrapper (still inside the same
   ancestor chain, so every scoped selector keeps matching) purely so
   its zoomed box can be centred and scrolled correctly. Everything is
   restored exactly on close.

   Safe to include once per page even with multiple sheets present
   (each gets its own trigger; one shared control bar is reused). Guards
   against double-init if a page accidentally inlines this twice.
   ================================================================ */
(function () {
  if (window.__a3ZoomInit) return;
  window.__a3ZoomInit = true;

  function init() {
    var stages = [].slice.call(document.querySelectorAll('.stage, .oap-stage'));
    if (!stages.length) return;

    var bar = document.createElement('div');
    bar.className = 'a3-lb-bar';
    bar.innerHTML =
      '<button type="button" class="a3-lb-btn" data-a3="out" aria-label="Zoom out">−</button>' +
      '<span class="a3-lb-pct" data-a3="pct">100%</span>' +
      '<button type="button" class="a3-lb-btn" data-a3="in" aria-label="Zoom in">+</button>' +
      '<button type="button" class="a3-lb-btn" data-a3="reset" aria-label="Reset zoom">Fit</button>' +
      '<button type="button" class="a3-lb-btn a3-lb-close" data-a3="close" aria-label="Close">×</button>';
    document.body.appendChild(bar);
    var pctEl = bar.querySelector('[data-a3="pct"]');

    var active = null; // { stage, sheet, wrap, natW, natH, baseScale, zoom, savedStageStyle, savedSheetTransform }

    function applyZoom() {
      if (!active) return;
      var s = active.baseScale * active.zoom;
      active.sheet.style.transform = 'scale(' + s + ')';
      active.sheet.style.transformOrigin = 'top left';
      active.wrap.style.width = (active.natW * s) + 'px';
      active.wrap.style.height = (active.natH * s) + 'px';
      pctEl.textContent = Math.round(active.zoom * 100) + '%';
    }

    function open(stage) {
      if (active) close();
      var sheet = stage.querySelector('.sheet');
      if (!sheet) return;

      var savedSheetTransform = sheet.style.transform;
      sheet.style.transform = 'none';
      var natW = sheet.offsetWidth, natH = sheet.offsetHeight;
      if (!natW || !natH) { sheet.style.transform = savedSheetTransform; return; }

      var savedStageStyle = stage.getAttribute('style') || '';

      // `position:fixed` positions relative to the viewport UNLESS some
      // ancestor establishes its own containing block — which any ancestor
      // with a non-`none` transform does, including one mid- or post- a CSS
      // entrance animation (some host packs fade/rise each newly-shown
      // section in with `animation: ... both`, and a few browsers keep that
      // animation's effect "in force" — and its transform engaged — even
      // once finished). Walk up and neutralise any such transform inline
      // for the duration of the zoom, so the lightbox reliably fills the
      // real viewport regardless of what the surrounding page is doing.
      var neutralised = [];
      for (var an = stage.parentElement; an && an !== document.body; an = an.parentElement) {
        if (getComputedStyle(an).transform !== 'none') {
          neutralised.push({ el: an, prev: an.style.transform });
          an.style.transform = 'none';
        }
      }

      // Re-parent the sheet one level down, inside the SAME ancestor chain
      // (stage is untouched otherwise), purely so its exact scaled box size
      // can be reserved for margin-based centring inside the scrollable stage.
      var wrap = document.createElement('div');
      wrap.className = 'a3-zoom-wrap';
      stage.insertBefore(wrap, sheet);
      wrap.appendChild(sheet);

      active = {
        stage: stage, sheet: sheet, wrap: wrap, natW: natW, natH: natH,
        zoom: 1, savedStageStyle: savedStageStyle, savedSheetTransform: savedSheetTransform,
        neutralised: neutralised,
      };

      stage.style.transform = 'none';
      stage.style.width = '';
      stage.style.height = '';
      stage.classList.add('a3-zoom-open');

      var availW = innerWidth * 0.92, availH = innerHeight * 0.82;
      active.baseScale = Math.min(availW / natW, availH / natH, 1.6);
      applyZoom();

      bar.classList.add('open');
      document.documentElement.classList.add('a3-lb-lock');
      stage.scrollTop = 0;
      stage.scrollLeft = 0;
    }

    function close() {
      if (!active) return;
      var a = active;
      a.sheet.style.transform = a.savedSheetTransform;
      a.stage.insertBefore(a.sheet, a.wrap);
      a.wrap.remove();
      if (a.savedStageStyle) a.stage.setAttribute('style', a.savedStageStyle);
      else a.stage.removeAttribute('style');
      a.stage.classList.remove('a3-zoom-open');
      a.neutralised.forEach(function (n) {
        if (n.prev) n.el.style.transform = n.prev;
        else n.el.style.removeProperty('transform');
      });
      active = null;
      bar.classList.remove('open');
      document.documentElement.classList.remove('a3-lb-lock');
    }

    stages.forEach(function (stage) {
      stage.classList.add('a3-zoomable');
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'a3-zoom-btn';
      btn.setAttribute('aria-label', 'Zoom in to read this sheet');
      btn.innerHTML =
        '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" ' +
        'stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/>' +
        '<line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/>' +
        '<line x1="8" y1="11" x2="14" y2="11"/></svg><span>Zoom</span>';
      btn.addEventListener('click', function (e) { e.stopPropagation(); open(stage); });
      stage.appendChild(btn);

      // Click the dark surround (not the sheet itself) to close.
      stage.addEventListener('click', function (e) {
        if (stage.classList.contains('a3-zoom-open') && e.target === stage) close();
      });
    });

    bar.addEventListener('click', function (e) {
      var act = e.target.closest && e.target.closest('[data-a3]');
      if (!act || !active) return;
      var k = act.getAttribute('data-a3');
      if (k === 'in') { active.zoom = Math.min(active.zoom + 0.25, 4); applyZoom(); }
      else if (k === 'out') { active.zoom = Math.max(active.zoom - 0.25, 0.4); applyZoom(); }
      else if (k === 'reset') { active.zoom = 1; applyZoom(); active.stage.scrollTop = 0; active.stage.scrollLeft = 0; }
      else if (k === 'close') close();
    });

    document.addEventListener('wheel', function (e) {
      if (!active || !e.ctrlKey) return;
      e.preventDefault();
      active.zoom = Math.min(4, Math.max(0.4, active.zoom + (e.deltaY < 0 ? 0.12 : -0.12)));
      applyZoom();
    }, { passive: false });

    document.addEventListener('keydown', function (e) {
      if (!active) return;
      if (e.key === 'Escape') close();
      else if (e.key === '+' || e.key === '=') { active.zoom = Math.min(4, active.zoom + 0.25); applyZoom(); }
      else if (e.key === '-' || e.key === '_') { active.zoom = Math.max(0.4, active.zoom - 0.25); applyZoom(); }
      else if (e.key === '0') { active.zoom = 1; applyZoom(); }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
