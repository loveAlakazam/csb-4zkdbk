const setBackgroundBtn = document.querySelector("#setting-background");

const imgs = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg"];
const chosenImg = imgs[Math.floor(Math.random() * imgs.length)];
const bgImg = document.createElement("img");

const body = document.querySelector("body");

bgImg.src = `./src/imgs/${chosenImg}`;

// document.body.appendChild(bgImg);
body.style.backgroundImage = `url("./src/imgs/${chosenImg}")`;
body.style.backgroundSize = "cover";

const setBackgroundContainer = document.querySelector(
  "#setting-background-container"
);

function openSetBackground(event) {
  setBackgroundContainer.classList.toggle("hidden");
}

setBackgroundBtn.addEventListener("click", openSetBackground);
