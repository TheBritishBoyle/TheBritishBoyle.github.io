
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
const imgButtons = document.querySelectorAll(".job-column");

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

/* test */

const wrapper = document.getElementById("tiles");

let columns = 0,
    rows = 0,
    toggled = false;

const toggle = () => {
  toggled = !toggled;
  
  document.body.classList.toggle("toggled");
}

const handleOnClick = index => {
  toggle();
  
  anime({
    targets: ".tile",
    opacity: toggled ? 0 : 1,
    delay: anime.stagger(50, {
      grid: [columns, rows],
      from: index
    })
  });
}

const createTile = index => {
  const tile = document.createElement("div");
  
  tile.classList.add("tile");
  
  tile.style.opacity = toggled ? 0 : 1;
  
  tile.onclick = e => handleOnClick(index);
  
  return tile;
}

const createTiles = quantity => {
  Array.from(Array(quantity)).map((tile, index) => {
    wrapper.appendChild(createTile(index));
  });
}

const createGrid = () => {
  wrapper.innerHTML = "";
  
  const size = document.body.clientWidth > 800 ? 100 : 50;
  
  columns = Math.floor(document.body.clientWidth / size);
  rows = Math.floor(document.body.clientHeight / size);
  
  createTiles(columns * rows);
}

createGrid();

window.onresize = () => createGrid();
