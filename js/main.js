import { getDuration } from './functions.js';

const durationInavista = document.getElementById("durationInavista");
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





