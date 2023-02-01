
/* Nav list */

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

/* Job Buttons */


const texts = document.querySelectorAll(".job");
const imgButtons = document.querySelectorAll(".job-image");

imgButtons.forEach((imgButton, butIndex) => {
  imgButton.addEventListener("click", () => {

    imgButtons.forEach((imgButtonTwo, butIndexTwo) => {
      if (butIndex != butIndexTwo){
        if(imgButtonTwo.hasAttribute("active")){
          imgButtonTwo.toggleAttribute("active");
        }
      }
    });

    imgButton.toggleAttribute("active");

    texts.forEach((text, textIndex) => {

      if(text.hasAttribute("visable")){
        text.toggleAttribute("visable");
      }

      else if(butIndex === textIndex){
        text.toggleAttribute("visable");
      }

    });
  });
});

/* Scrolling code */

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle('scroll-visable', entry.isIntersecting);
  });
});

const hiddenElements = document.querySelectorAll('.scroll-hidden');
hiddenElements.forEach((el) => observer.observe(el));
