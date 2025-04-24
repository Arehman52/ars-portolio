import { getDuration, showLoader } from './functions.js';

const durationInavista = document.getElementById("durationInavista");
const durationTT = document.getElementById("durationTT");
const durationGM = document.getElementById("durationGM");
const seeInavista = document.getElementById("readmore-inavista");
const seeTT = document.getElementById("readmore-TT");
/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]"),
tabContents = document.querySelectorAll("[data-content]");
const uiDevIP = "UI development still in progress for this action!";



tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);
    
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });
    target.classList.add("qualification__active");
    
    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  });
});

// above Made by Ambresh

//see mores
[seeInavista, seeTT].forEach(e => e.addEventListener('click', (ev) => {
  alert(uiDevIP);
}));

durationInavista.innerText = getDuration(new Date('02/01/2023'));
durationTT.innerText = getDuration(new Date('03/01/2022') ,new Date('02/01/2023'));
durationGM.innerText = getDuration(new Date('08/02/2021'), new Date('03/02/2022'));



document.getElementById("slideButton").addEventListener("click", function () {
  const icon = document.getElementById("slideButton").childNodes[0];
  if(icon.classList.contains('fa-angles-up')) {
    showLoader(true);
      icon.classList.remove('fa-angles-up');
      icon.classList.add('fa-angles-down');
  } else {
    showLoader(false);
      icon.classList.remove('fa-angles-down');
      icon.classList.add('fa-angles-up');
  }
  const creditsBody = document.querySelector(".credits__body");
  if (creditsBody.style.transform === "translateY(-40px)") {
      creditsBody.style.transform = "translateY(0)";
  } else {
      creditsBody.style.transform = "translateY(-40px)";
  }
});



document.addEventListener("click", function (event) {
  const slideButton = document.getElementById("slideButton");
  const creditsBody = document.querySelector(".credits__body");

  // Check if the click was outside the slideButton
  if (!slideButton.contains(event.target) && !creditsBody.contains(event.target)) {
    
  const icon = document.getElementById("slideButton").childNodes[0];
  icon.classList.remove('fa-angles-down');
  icon.classList.add('fa-angles-up');
  const creditsBody = document.querySelector(".credits__body");
  if (creditsBody.style.transform === "translateY(-40px)") {
      creditsBody.style.transform = "translateY(0)";
  }
    
    // const icon = slideButton.childNodes[0];

    // // Reset the icon if necessary
    // if (icon.classList.contains('fa-angles-up')) {
    //   icon.classList.remove('fa-angles-up');
    //   icon.classList.add('fa-angles-down');
    // }

    // // Hide or reset the credits body
    // creditsBody.style.transform = "translateY(0)";
  }
});
