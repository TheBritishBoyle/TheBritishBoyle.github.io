
const navList = document.querySelector(".nav-list");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const currentState = button.getAttribute("data-state");

    if (!currentState || currentState === "closed") {
      button.setAttribute("data-state", "opened");
      button.setAttribute("aria-expanded", "true");
    } else {
      button.setAttribute("data-state", "closed");
      button.setAttribute("aria-expanded", "false");
    }
    navList.toggleAttribute("data-visible");
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle('scroll-visable', entry.isIntersecting);
  });
});

const hiddenElements = document.querySelectorAll('.scroll-hidden');
hiddenElements.forEach((el) => observer.observe(el));
