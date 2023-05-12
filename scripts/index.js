const hamburgerMenu = document.getElementById("hamburger-menu");
const menuItemsList = document.querySelectorAll(".menu-item");
const overlay = document.getElementById("overlay");

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
  // Get the current position of the mouse.
  let x = event.clientX;
  let y = event.clientY;

  // Do something with the mouse position.
  console.log(`The mouse is at position (${x}, ${y})`);
});