const hamburgerMenu = document.getElementById("hamburger-menu");
const menuItemsList = document.querySelectorAll(".menu-item");
const overlay = document.getElementById("overlay");

const leftElement = document.getElementById("left-element");
const rightElement = document.getElementById("right-element");

let hidden = true;

hamburgerMenu.addEventListener("click", function () {
  console.log("clicked");
  if (hidden) {
    menuItemsList.forEach((item, index) => {
      item.style.transform = "translateX(0)";
    });
    overlay.style.opacity = "100%";
    hamburgerMenu.style.opacity = "100";
    hidden = false;
  } else {
    menuItemsList.forEach((item, index) => {
      item.style.transform = "translateX(-400%)";
    });
    hamburgerMenu.style.opacity = "65%";
    overlay.style.opacity = "0%";
    hidden = true;
  }
});

function closeMenu() {
  menuItemsList.forEach((item, index) => {
    item.style.transform = "translateX(-400%)";
  });
  hamburgerMenu.style.opacity = "65%";
  overlay.style.opacity = "0%";
  hidden = true;
}

// detecting ctrl key
function onCtrlKeyDown(event) {
  if (event.ctrlKey) {
    // The `Ctrl` key is down.
    console.log("ctrl key down");
  }
}
document.addEventListener("keydown", onCtrlKeyDown);

const firstNavItem = document.querySelector(".nav--1");
const secondNavItem = document.querySelector(".nav--2");
const thirdNavItem = document.querySelector(".nav--3");
const fourthNavItem = document.querySelector(".nav--4");

// The Great Pyramid of Giza is an ancient Egyptian burial monument built around 4,500 years ago for Pharaoh Khufu. It is the largest of the pyramids in the Giza complex, standing approximately 481 feet tall. Constructed with millions of stone blocks, it showcases the advanced engineering skills of the ancient Egyptians and remains a popular tourist attraction today.

firstNavItem.addEventListener("click", function () {
  closeMenu();
  firstNavItem.style.backgroundColor = "#fff";
});
