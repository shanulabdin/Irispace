const nav = document.getElementById('navbar');
const overlay = document.getElementById('overlay');
const linkBtns = document.querySelectorAll('.link-btn');

function openSidebar() {
  nav.classList.add('show');
  overlay.style.display = 'block';
}

function closeSidebar() {
  nav.classList.remove('show');
  overlay.style.display = 'none';
}

linkBtns.forEach(link => {
  link.addEventListener('click', () => {
    linkBtns.forEach(btn => btn.classList.remove('active-link'));
    link.classList.add('active-link');
    closeSidebar();
  });
});