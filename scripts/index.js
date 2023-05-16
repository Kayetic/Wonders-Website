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

const centeredElement = document.querySelector(".centered-element");
const boundingElement = document.querySelector(".bounding-element");

const firstMovementFunction = function (event) {
  const ball = document.querySelector("div.ball");

  let mouseX = 0;
  let mouseY = 0;

  let ballX = 0;
  let ballY = 0;

  let speed = 0.06;

  function animate() {
    let distX = mouseX - ballX;
    let distY = mouseY - ballY;

    ballX = ballX + distX * speed;
    ballY = ballY + distY * speed;

    ball.style.left = ballX + "px";
    ball.style.top = ballY + "px";

    requestAnimationFrame(animate);
  }
  animate();

  document.addEventListener("mousemove", function (event) {
    mouseX = event.pageX;
    mouseY = event.pageY;
  });
};

firstMovementFunction();
