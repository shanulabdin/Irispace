const navBtns = document.querySelectorAll('.nav-btn-js');

navBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    navBtns.forEach(b => b.classList.remove('nav-btn-active'));
    btn.classList.add('nav-btn-active');
  });
});
