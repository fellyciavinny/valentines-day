const container = document.getElementById("container");
const buttonNo = document.getElementById("btnNo");
const buttonYes = document.getElementById("btnYes");

let countNo = 0;

const yesMessage = [
  "Why no?",
  "u sure?",
  "km kejar no? :(",
  "icaaa",
  "Click Me!",
  "jahat",
  "oh gt",
  "ckp tw",
  "LAST!",
  "no",
  "KLIK AKUUU",
  "km ga sayang ak y",
  "ok",
  "km skrg berubah ya",
  "tega",
  "dah bye",
  "bye",
  "bye",
  "bye",
  "bye",
  "bye",
  "oke",
  "y",
  "yyy",
  "yy",
  "y",
  "y",
  "Yes",
  "Yes",
  "Yes",
  "Yes",
];

buttonNo.addEventListener("mouseover", function () {
  buttonNo.style.position = "absolute";
  buttonNo.style.top = Math.random() * (window.innerHeight - 100) + "px";
  buttonNo.style.left = Math.random() * (window.innerWidth - 100) + "px";

  const currentSize = parseInt(buttonYes.style.fontSize);
  buttonYes.style.fontSize = currentSize + 10 + "px";
  buttonYes.style.position = "static";

  if (countNo === yesMessage.length) {
    return;
  } else {
    buttonYes.innerText = yesMessage[countNo++];
  }
});

buttonYes.addEventListener("click", function () {
  container.innerHTML = "";
  firstRender = false;
  localStorage.setItem("timeSpentOnSite", 0);

  setInterval(createHeart, 100);
  newContainerContent();
});

function newContainerContent() {
  const image = document.createElement("img");
  image.src = "../src/assets/img/Peggy Kisses.gif";

  const wrapperImg = document.createElement("div");
  wrapperImg.className = "wrapper-img";

  const heading = document.createElement("h1");
  heading.className = "title";
  heading.innerText = "OK Yay!";
  heading.id = "gif2Title";

  wrapperImg.append(image, heading);
  container.appendChild(wrapperImg);
}
