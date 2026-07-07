/*
 * Maxxim inline Copy Editor. Inert for visitors: it activates only when a
 * "copyedit" URL flag is present or an editor token is already stored.
 * Turn edit mode on, click any text, type, click away — the change saves to
 * the copy override store and is live for everyone immediately.
 *
 * The strict site CSP forbids injected inline <style>, so the editor's styles
 * live in /copy-edit.css and are attached as a same-origin <link> (allowed by
 * style-src 'self'). No inline style attributes are ever set on the page.
 */
(function () {
  var TOKEN_KEY = "maxxim_copy_token";
  var EDITABLE = "h1,h2,h3,h4,h5,h6,p,li,blockquote,figcaption,dt,dd,summary,a,button,span";
  var state = { on: false, el: null, nodes: [], originals: [] };
  var bar, status;

  function token() { return localStorage.getItem(TOKEN_KEY) || ""; }
  function flagged() { return /[?#&](copyedit|edit)\b/.test(location.search + location.hash); }
  function pagePath() {
    var p = location.pathname.replace(/\/$/, "");
    return p || "/";
  }

  function init() {
    if (!token() && !flagged()) return;
    if (!token()) {
      var t = prompt("Copy Editor: enter your editor token");
      if (!t) return;
      localStorage.setItem(TOKEN_KEY, t);
    }
    ensureStyles();
    if (!document.getElementById("copy-edit-bar")) buildBar();
  }

  function ensureStyles() {
    if (document.getElementById("copy-edit-css")) return;
    var link = document.createElement("link");
    link.id = "copy-edit-css";
    link.rel = "stylesheet";
    link.href = "/copy-edit.css";
    document.head.appendChild(link);
  }

  function buildBar() {
    bar = document.createElement("div");
    bar.id = "copy-edit-bar";
    bar.innerHTML =
      '<button type="button" data-ce="toggle">Copy edit: OFF</button>' +
      '<button type="button" data-ce="out" title="Forget token on this browser">Sign out</button>' +
      '<span data-ce="status"></span>';
    document.body.appendChild(bar);
    status = bar.querySelector("[data-ce=status]");
    bar.addEventListener("click", function (e) {
      var b = e.target.closest("[data-ce]");
      if (!b) return;
      if (b.dataset.ce === "toggle") toggle();
      if (b.dataset.ce === "out") { localStorage.removeItem(TOKEN_KEY); location.reload(); }
    });
    bindOnce();
  }

  var bound = false;
  function bindOnce() {
    if (bound) return;
    bound = true;
    document.addEventListener("click", onClick, true);
    document.addEventListener("mouseover", onHover, true);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && state.el) finishEdit();
    });
  }

  function toggle() {
    state.on = !state.on;
    bar.querySelector("[data-ce=toggle]").textContent = "Copy edit: " + (state.on ? "ON" : "OFF");
    document.body.classList.toggle("copy-edit-on", state.on);
    say(state.on ? "Click any text to edit it" : "");
    if (!state.on && state.el) finishEdit();
  }

  function onHover(e) {
    if (!state.on) return;
    document.querySelectorAll("[data-ce-hover]").forEach(function (n) { n.removeAttribute("data-ce-hover"); });
    var el = pick(e.target);
    if (el) el.setAttribute("data-ce-hover", "");
  }

  function pick(target) {
    if (!target || !target.closest || target.closest("#copy-edit-bar")) return null;
    var el = target.closest(EDITABLE);
    if (!el || !el.textContent.trim()) return null;
    return el;
  }

  function onClick(e) {
    if (!state.on || e.target.closest("#copy-edit-bar")) return;
    var el = pick(e.target);
    e.preventDefault();
    e.stopPropagation();
    if (!el || el === state.el) return;
    if (state.el) finishEdit();
    startEdit(el);
  }

  function textNodes(el) {
    var w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    var out = [], n;
    while ((n = w.nextNode())) if (n.nodeValue.trim()) out.push(n);
    return out;
  }

  function startEdit(el) {
    state.el = el;
    state.nodes = textNodes(el);
    state.originals = state.nodes.map(function (n) { return n.nodeValue; });
    el.setAttribute("data-ce-editing", "");
    try { el.contentEditable = "plaintext-only"; } catch (_) { el.contentEditable = "true"; }
    el.focus();
    el.addEventListener("blur", finishEdit, { once: true });
  }

  function finishEdit() {
    var el = state.el;
    if (!el) return;
    state.el = null;
    el.removeAttribute("data-ce-editing");
    el.contentEditable = "false";
    el.removeAttribute("contenteditable");

    var items = [];
    var after = textNodes(el);
    if (after.length === state.nodes.length) {
      for (var i = 0; i < after.length; i++) {
        var was = state.originals[i], now = after[i].nodeValue;
        if (was !== now && was.trim()) items.push({ find: was, replace: now });
      }
    } else if (state.originals.length === 1) {
      items.push({ find: state.originals[0], replace: el.textContent });
    } else {
      say("Structure changed, edit not captured.");
      return;
    }
    if (items.length) save(items);
  }

  function save(items) {
    say("Saving…");
    fetch("/api/copy", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ token: token(), path: pagePath(), items: items }),
    })
      .then(function (r) { return r.json().then(function (j) { return { s: r.status, j: j }; }); })
      .then(function (r) {
        if (r.s === 401) { localStorage.removeItem(TOKEN_KEY); say("Wrong token. Reload and re-enter."); return; }
        say(r.j.ok ? "Saved · live for everyone" : (r.j.error || "Save failed"));
      })
      .catch(function () { say("Network error, not saved"); });
  }

  function say(m) { if (status) status.textContent = m; }

  init();
  document.addEventListener("astro:page-load", function () {
    if (token() || flagged()) {
      ensureStyles();
      if (!document.getElementById("copy-edit-bar")) buildBar();
      document.body.classList.toggle("copy-edit-on", state.on);
    }
  });
})();
