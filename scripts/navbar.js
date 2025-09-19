const syncPointer = ({ x: pointerX, y: pointerY }) => {
  const x = pointerX.toFixed(2);
  const y = pointerY.toFixed(2);
  const xp = (pointerX / window.innerWidth).toFixed(2);
  const yp = (pointerY / window.innerHeight).toFixed(2);

  const root = document.documentElement.style;
  root.setProperty('--x', x);
  root.setProperty('--y', y);
  root.setProperty('--xp', xp);
  root.setProperty('--yp', yp);
};

document.body.addEventListener('pointermove', syncPointer, { passive: true });
