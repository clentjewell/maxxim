// Highlight the active section in the sidebar as the reader scrolls.
const links = [...document.querySelectorAll('.sidebar nav a')];
const ids = links.map(a => a.getAttribute('href').slice(1));
const obs = new IntersectionObserver(entries => {
  for (const e of entries) {
    if (e.isIntersecting) {
      links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
    }
  }
}, { rootMargin: '-30% 0px -60% 0px' });
ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
