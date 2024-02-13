localStorage.setItem("timeSpentOnSite", 0);

let firstRender = true;
let timeSpentOnSite = null;

function getTimeSpentOnSite() {
  timeSpentOnSite = parseInt(localStorage.getItem("timeSpentOnSite"));
  timeSpentOnSite = isNaN(timeSpentOnSite) ? 0 : timeSpentOnSite;
  return timeSpentOnSite;
}

function startCounting() {
  let timerStart = Date.now();
  setInterval(function () {
    timeSpentOnSite = getTimeSpentOnSite() + (Date.now() - timerStart);
    localStorage.setItem("timeSpentOnSite", timeSpentOnSite);
    timerStart = parseInt(Date.now());

    // Convert to seconds
    let seconds = parseInt(timeSpentOnSite / 1000);
    if (firstRender) {
      updateImgSrc(seconds);
    } else {
      updateImgTitle(seconds)
    }

    // console.log(seconds);
  }, 1000);
}

function updateImgSrc(seconds) {
  const gifImg = document.getElementById("gifImage");
  const wrapperImg = document.getElementById("wrapperImage");
  const content = document.getElementById("gifTitle");

  switch (seconds) {
    case 10:
      content.innerText = "lama ya jawabnya😠";
      gifImg.src = "src/assets/img/Peachhappy Angry.gif";
      wrapperImg.append(content);
      break;
    case 15:
      content.innerText = "";
      gifImg.src = "src/assets/img/Peachhappy Peachdance.gif";
      break;
    case 18:
      content.innerText = "pls be my valentine🥺";
      gifImg.src = "src/assets/img/Peachhapyy Crying.gif";
      break;
    case 25:
      content.innerText = "";
      gifImg.src = "src/assets/img/Peachhappy Peachdance.gif";
      localStorage.setItem("timeSpentOnSite", 0);
      break;
  }
}

function updateImgTitle(seconds) {
  const content = document.getElementById("gif2Title");

  switch (seconds) {
    case 10:
      content.innerText = "loveyouuu";
      break;
    case 15:
      content.innerText = "happy valentine my girl💐";
      break;
  }
}

startCounting();
