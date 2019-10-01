// Your code goes here
document.querySelectorAll(".nav-link").forEach(element => {
  element.addEventListener("mouseenter", () => {
    element.style.transform = "scale(1.5)";
    element.style.transition = "all 0.3s";
  });
  element.addEventListener("mouseleave", () => {
    element.style.transform = "scale(1.0)";
    element.style.transition = "all 0.3s";
  });
});

const body = document.querySelector("body");

window.addEventListener("scroll", event => {
  body.style.backgroundColor = "skyblue";
});

const header = document.querySelector("header");

header.addEventListener("click", () => {
  header.style.backgroundColor = "#F5D4BC";
  console.log(end);
});

const logoText = document.querySelector(".logo-heading");
logoText.addEventListener("dblclick", () => {
  logoText.textContent = "DON'T Right Click";
});

document.querySelectorAll("h2").forEach(element => {
  element.addEventListener("mouseover", () => {
    element.style.textShadow = "5px 5px 1px grey, 10px 10px 1px white";
  });
});

window.addEventListener("contextmenu", function(x) {
  alert("Look at you, you little rebel. I like you.");
});

const banner = document.querySelector(".intro img");
window.addEventListener("keydown", function() {
  banner.style.transform = "scale(1.5)";
  banner.style.transition = "all 0.3s";
});
window.addEventListener("keyup", function() {
  banner.style.transform = "scale(1)";
  banner.style.transition = "all 0.3s";
});

document.querySelectorAll(".btn").forEach(element => {
  element.addEventListener("mousedown", () => {
    element.style.transform = "scale(1.2)";
    element.style.transition = "all 0.3s";
  });
  element.addEventListener("mouseup", () => {
    element.style.transform = "scale(1.0)";
    element.style.transition = "all 0.3s";
  });
});
