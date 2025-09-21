const gridItem = document.querySelectorAll('.grid-item');

gridItem.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('grid-item-focus');
  });
});