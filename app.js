const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const toggleButton = document.getElementsByClassName("navbar__toggle")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

//falling confetti
window.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById('breadCanvas');

  if (!canvas) {
    console.error("Canvas not found!");
    return;
  }

  const confetti = window.confetti.create(canvas, {
    resize: true,
    useWorker: true,
  });

  function launchBread() {
    for (let i = 0; i < 5; i++) {
      confetti({
        particleCount: 1,
        angle: 90,
        spread: 360,
        origin: { x: Math.random(), y: 0 },
        emoji: '🍞',
        scalar: 2
      });
    }
  }

  // Bread falls every 250ms
  setInterval(launchBread, 250);
});





