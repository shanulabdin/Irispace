const scrollText = document.getElementById("scroll-text");

let index = 0;
const total = scrollText.children.length;

setInterval(() => {
  index = (index + 1) % total;
  scrollText.style.transform = `translateY(-${index * 33}%)`;
}, 1800);

const imageStack = document.getElementById("image-stack");
const images = imageStack.children;
let currentIndex = 0;
const totalImages = images.length;

setInterval(() => {
  currentIndex = (currentIndex + 1) % totalImages;
  imageStack.style.transform = `translateY(-${currentIndex * 100}%)`;
}, 1800);