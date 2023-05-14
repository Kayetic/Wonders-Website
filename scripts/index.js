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

// detecting ctrl key
function onCtrlKeyDown(event) {
  if (event.ctrlKey) {
    // The `Ctrl` key is down.
    console.log("ctrl key down");
  }
}
document.addEventListener("keydown", onCtrlKeyDown);

// holding mouse position
window.addEventListener("mousemove", (event) => {
  const firstFloating = document.querySelector(".floating--1");
  const secondFloating = document.querySelector(".floating--2");
  const thirdFloating = document.querySelector(".floating--3");
  const fourthFloating = document.querySelector(".floating--4");

  let x = event.clientX;
  let y = event.clientY;
});
