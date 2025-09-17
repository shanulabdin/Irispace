document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('grid');
  if (!grid) return;

  // Write CSS vars on the grid element
  const setVars = (x, y) => {
    grid.style.setProperty('--x', x + 'px');
    grid.style.setProperty('--y', y + 'px');
  };

  // Turn glow on/off when entering/leaving the grid
  grid.addEventListener('pointerenter', () => grid.classList.add('active'));
  grid.addEventListener('pointerleave', () => grid.classList.remove('active'));

  // Smooth follow (tweak ease: 1 = snap; lower = more trail)
  let tx = 0, ty = 0, cx = 0, cy = 0;
  const ease = 0.08;

  function tick() {
    cx += (tx - cx) * ease;
    cy += (ty - cy) * ease;
    setVars(cx, cy);
    requestAnimationFrame(tick);
  }
  tick();

  grid.addEventListener('pointermove', (e) => {
    const r = grid.getBoundingClientRect();
    tx = e.clientX - r.left;
    ty = e.clientY - r.top;
  }, { passive: true });

  // Keep coords stable on resize/scroll
  window.addEventListener('resize', () => setVars(cx, cy), { passive: true });
  window.addEventListener('scroll', () => setVars(cx, cy), { passive: true });
});
