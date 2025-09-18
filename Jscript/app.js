const menu = document.querySelector(".menu");
const subMenu = document.querySelector(".subMenu");
const close = document.querySelector(".closeSubMenu");

menu.addEventListener("click", () => {
  subMenu.classList.toggle("h-72");
});

close.addEventListener("click", () => {
  subMenu.classList.toggle("h-72");
});

const riders = [
  "Emmanuel",
  "Chinedu",
  "Chukwuemeka",
  "Ifeanyi",
  "Okeke",
  "Uche",
  "Nwosu",
];
let j = riders[Math.floor(Math.random() * riders.length)];

let rider1 = document.querySelector(".first-rider");
let rider2 = document.querySelector(".seceond-rider");

rider1.innerHTML = j;
rider2.innerHTML = j;

const prices = [
  "14,034.89",
  "15,034.89",
  "16,034.89",
  "17,034.89",
  "18,034.89",
  "19,034.89",
  "20,034.89",
];

let priceContainers = document.querySelector(".price-container");
priceContainers.innerHTML = prices[Math.floor(Math.random() * prices.length)];
