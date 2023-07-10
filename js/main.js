/* ===================Show menu========================*/
const navMenu = document.getElementById("nav__menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*====================Menu show========================*/
/*validate if contant exsits */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=======Remove the menu mobile====*/
const navLink = document.querySelectorAll(".nav__link");

function linkeAction() {
  const navMenu = document.getElementById("nav__menu");

  // Whwn we click on each nav__link , we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkeAction));

/*==========Accorion skills=====*/
const skillsContaent = document.getElementsByClassName("skills__content"),
  skillsHeader = document.querySelectorAll(".skills__header");

function toggaleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContaent.length; i++) {
    skillsContaent[i].className = "skills__content skills__close";
  }
  if (itemClass == "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggaleSkills);
});

/*=========================Qulification==========================*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContent = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContent.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });
    target.classList.add("qualification__active");

    tab.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  });
});

/*======================Services Modal================================*/
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalClose = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtns, i) => {
  modalBtns.addEventListener("click", () => {
    modal(i); /*  close button *   */
  });
});

modalClose.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalViews) => {
      modalViews.classList.remove("active-modal");
    });
  });
});


