const items = document.querySelectorAll('.item');
items.forEach(item => {
  item.addEventListener('click', () => {
    
    items.forEach(el => {
      if(el !== item) {
        el.classList.remove('item-js');
      }
    })
    item.classList.toggle('item-js');
  })
})