const navBtns = document.querySelectorAll('.nav-btn-js');

// Click handling (yours)
navBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    navBtns.forEach(b => b.classList.remove('nav-btn-active'));
    btn.classList.add('nav-btn-active');
  });
});

// Map section IDs to nav buttons
const sectionMap = {};
navBtns.forEach(btn => {
  const id = btn.getAttribute('href')?.replace('#', '');
  if (id) sectionMap[id] = btn;
});

const sections = document.querySelectorAll('main section[id]');

function setActive(id) {
  navBtns.forEach(b => b.classList.remove('nav-btn-active'));
  if (sectionMap[id]) sectionMap[id].classList.add('nav-btn-active');
}

// IntersectionObserver to sync on scroll
const observer = new IntersectionObserver((entries) => {
  // pick the most visible section among those intersecting
  const visible = entries
    .filter(e => e.isIntersecting)
    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
  if (visible[0]) {
    setActive(visible[0].target.id);
  }
}, {
  root: null,
  rootMargin: '-35% 0px -35% 0px', // focus on middle band
  threshold: [0.25, 0.5, 0.75, 1]
});

// ✅ Start observing (this was missing)
sections.forEach(sec => observer.observe(sec));

// Optional: set initial active on load (in case IO doesn’t fire immediately)
window.addEventListener('load', () => {
  // find the section whose center is closest to viewport center
  const centerY = window.innerHeight / 2;
  let best = null, bestDist = Infinity;
  sections.forEach(sec => {
    const r = sec.getBoundingClientRect();
    const secCenter = r.top + r.height / 2;
    const dist = Math.abs(secCenter - centerY);
    if (dist < bestDist) { bestDist = dist; best = sec; }
  });
  if (best) setActive(best.id);
}, { once: true });
