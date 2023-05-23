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

firstNavItem.addEventListener("click", function () {
  closeMenu();
  // Add the expanded-width class to apply the transition effect
  // Update the width property
  firstNavItem.style.width = "fit-content";
  firstNavItem.style.backgroundColor = "#f2f2f2";
  firstNavItem.style.color = "#000";
  firstNavItem.style.height = "fit-content";

  firstNavItem.innerHTML = `<h2 class="nav--1--heading">What is it?</h2><p class="nav--1--text">The Great Pyramid of Giza is an ancient Egyptian burial monument built around 4,500 years ago for Pharaoh Khufu. It is the largest of the pyramids in the Giza complex, standing approximately 481 feet tall. Constructed with millions of stone blocks, it showcases the advanced engineering skills of the ancient Egyptians and remains a popular tourist attraction today.</p>`;
  document.querySelector(".nav--1--heading").style.textAlign = "center";
  document.querySelector(".nav--1--heading").style.marginBottom = "1rem";
  document.querySelector(".nav--1--heading").style.marginTop = "1rem";
  document.querySelector(".nav--1--text").style.margin = "1rem";

  const navItemHeading = document.querySelector(".nav--1--heading");
  const navItemText = document.querySelector(".nav--1--text");
  navItemHeading.style.color = "black";
  navItemText.style.color = "black";
  firstNavItem.style.width = "20vw";
});

// make it so clicking anywhere outside the element will close the element to its original size
document.addEventListener("click", function (e) {
  if (e.target !== firstNavItem) {
    firstNavItem.style.height = "5vh";
    firstNavItem.style.width = "10vw";
    firstNavItem.style.backgroundColor = "transparent";
    firstNavItem.style.color = "#fff";
    firstNavItem.innerHTML = "What is it?";
  }
});
