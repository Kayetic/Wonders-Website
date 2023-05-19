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

const firstNavItem = document.querySelector(".nav--1");
const secondNavItem = document.querySelector(".nav--2");
const thirdNavItem = document.querySelector(".nav--3");
const fourthNavItem = document.querySelector(".nav--4");

firstNavItem.addEventListener("click", function () {
  firstNavItem.style.backgroundColor = "#f2f2f2";
  firstNavItem.style.color = "#000";
  // set height to 80vh
  firstNavItem.style.height = "fit-content";
  // add lorem ipsum text under the heading of the nav item
  firstNavItem.innerHTML += `<p class="nav--1--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>`;
  // set width to double the current width
  firstNavItem.style.width = "20vw";
});
