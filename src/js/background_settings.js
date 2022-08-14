// const setBackgroundBtn = document.querySelector("#setting-background");

const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34"
];


function getColors() {
  return Math.floor(colors.length * Math.random());
}

function getBackgroundColor() {
  let c1, c2;
  c1 = getColors();
  c2 = getColors();
  while (c1 === c2) {
    c2 = getColors();
    if (c1 !== c2) {
      break;
    }
  }
  
  const color1 = colors[c1];
  const color2 = colors[c2];
  const body = document.querySelector("body");
  body.style.backgroundImage = `linear-gradient(${color1}, ${color2})`;
  body.style.backgroundSize= "cover"
  body.style.backgroundRepeat="no-repeat";
}

getBackgroundColor();


// const imgs = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg"];
// const chosenImg = imgs[Math.floor(Math.random() * imgs.length)];
// const bgImg = document.createElement("img");

// bgImg.src = `./src/imgs/${chosenImg}`;

// document.body.appendChild(bgImg);
// body.style.backgroundImage = `url("./src/imgs/${chosenImg}")`;
// body.style.backgroundSize = "cover";


// const setBackgroundContainer = document.querySelector(
//   "#setting-background-container"
// );

// function openSetBackground(event) {
//   setBackgroundContainer.classList.toggle("hidden");
// }

// setBackgroundBtn.addEventListener("click", openSetBackground);
