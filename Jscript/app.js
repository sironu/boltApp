const menu = document.querySelector(".menu");
const subMenu = document.querySelector(".subMenu");
const close = document.querySelector(".closeSubMenu");



menu.addEventListener("click", () => {  
  
  subMenu.classList.toggle("h-72");
});

close.addEventListener("click", () => {  
  
  subMenu.classList.toggle("h-72");
});

