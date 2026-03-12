const cursor = document.querySelector('.cursor');
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

// 1. Capture mouse position
window.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// 2. The Animation Loop (The Smooth Secret)
function animate() {
  // LERP (Linear Interpolation) 
  // This creates that "floaty" lag-free follow effect
  // 0.1 is the "softness" - lower is smoother/slower
  cursorX += (mouseX - cursorX) * 0.15;
  cursorY += (mouseY - cursorY) * 0.15;

  cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;

  requestAnimationFrame(animate);
}

animate(); // Start the loop