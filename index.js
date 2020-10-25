const card = document.querySelector(".card");
const container = document.querySelector(".container");

const title = document.querySelector(".info h1");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase");
const desc = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");

container.addEventListener("mousemove", (e) => {
  let xAchse = (window.innerWidth / 2 - e.pageX) / 10;
  let yAchse = (window.innerHeight / 2 - e.pageY) / 10;
  card.style.transform = `rotateY(${xAchse}deg) rotateX(${yAchse}deg)`;
});

container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  title.style.transform = "translateZ(100px)";
  sneaker.style.transform = "translateZ(150px)";
  purchase.style.transform = "translateZ(150px)";
  desc.style.transform = "translateZ(50px)";
  sizes.style.transform = "translateZ(100px)";
});

container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all .5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  title.style.transform = "translateZ(0)";
  sneaker.style.transform = "translateZ(0)";
  purchase.style.transform = "translateZ(0)";
  desc.style.transform = "translateZ(0)";
  sizes.style.transform = "translateZ(0)";
});
