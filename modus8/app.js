//pozdravna svg animacija

const observer2 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        tocka.classList.add("anim1");

        tocka2.classList.add("anim2");
        tocka3.classList.add("imgshow");
      }
    });
  },
  {
    rootMargin: "-200px",
    // threshold: 2,
  }
);

const hiddenElements2 = document.querySelectorAll(".line1");
hiddenElements2.forEach((el) => observer2.observe(el));

let tocka = document.querySelector(".line1");
let tocka2 = document.querySelector(".line2");
let tocka3 = document.querySelector(".prva-ikona");

// NOVI HEADER

// main scrolling element; html element
const scrollEl = document.documentElement;
const root = document.documentElement;

let scrollPos;

// update css property on scroll
function animation() {
  // check the scroll position has changed
  if (scrollPos !== scrollEl.scrollTop) {
    // reset the seen scroll position
    scrollPos = scrollEl.scrollTop;
    // update css property --scrollPos with scroll position in pixels
    root.style.setProperty("--scrollPos", scrollPos + "px");
  }

  // call animation again on next animation frame
  window.requestAnimationFrame(animation);
}

// start animation on next animation frame
window.requestAnimationFrame(animation);

//
// animacije all around fadeIn
//

const observer3 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        trigger.classList.add("show");
        trigger2.classList.add("show");
      }
    });
  },
  {
    // rootMargin: "-300px",
    threshold: 1.0,
  }
);

const hiddenElements3 = document.querySelectorAll(".uvod-h2");
hiddenElements3.forEach((el) => observer3.observe(el));

let trigger = document.querySelector(".uvod-h2");
let trigger2 = document.querySelector(".uvod-p");

const observer4 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        triggerdesni.classList.add("pojmadesna");
      }
    });
  },
  {
    // rootMargin: "-400px",
    threshold: 0.4,
  }
);

const hiddenElements4 = document.querySelectorAll(".sredina-svgg");
hiddenElements4.forEach((el) => observer4.observe(el));

let triggerdesni = document.querySelector(".desnopojma");

// josssss

const observer5 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        triggerlijevi.classList.add("pojmalijeva");
      }
    });
  },
  {
    // rootMargin: "-400px",
    threshold: 0.4,
  }
);

const hiddenElements5 = document.querySelectorAll(".sredina-svgg");
hiddenElements5.forEach((el) => observer5.observe(el));

let triggerlijevi = document.querySelector(".lijevopojma");

// sredina lijevo i desno

const observer6 = new IntersectionObserver(
  (entries, options) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        trigger3.classList.add("pojavise");
        trigger4.classList.add("pojavise");
      }
    });
  },
  {
    // rootMargin: "-300px",
    threshold: 0.5,
  }
);

const hiddenElements6 = document.querySelectorAll(".uvod-flex");
hiddenElements6.forEach((el) => observer6.observe(el));

let trigger3 = document.querySelector(".odlijeva");
let trigger4 = document.querySelector(".oddesna");

// LIGHT/DARK MODE

const button = document.getElementById("theme-button");
button.addEventListener("click", () => {
  document.body.classList.toggle("body-light-theme");
  document.body.classList.toggle("font-color-dark");
  brdo12.classList.toggle("brdo-fill");
  zadnjebrdo.classList.toggle("brdo-fill");
  svg_header.classList.toggle("go-blue");
  footer.classList.toggle("go-blue");
  layer.classList.toggle("go-blue");
  line1.classList.toggle("line1-dark");
  line2.classList.toggle("line2-dark");
  brdo2.classList.toggle("brdo2-fill");
  brdo3.classList.toggle("brdo3-fill");
  brdo4.classList.toggle("brdo4-fill");
  brdo5.classList.toggle("brdo5-fill");
  brdo6.classList.toggle("brdo6-fill");
  landscape.classList.toggle("landscape-light");
  glavni_naslov.classList.toggle("glavni-naslov-light");
  theme_button.classList.toggle("ri-sun-line");
  theme_light.classList.toggle("change-theme-light");
  head_color.classList.toggle("head-color-change");
  head_brain.classList.toggle("head-brain-change");
  light_a11y_handle.classList.toggle("light-a11y");
  light_a11y_title.classList.toggle("light-a11y");
  // text_accent.classList.toggle("dark-accent");
  // brain_linije.classList.toggle("brain-linije-change");
  brain_linije.forEach((el) => {
    el.classList.toggle("brain-linije-change");
  });
  rect_lighter.forEach((el) => {
    el.classList.toggle("rect-lighter-change");
  });
  rect_darker.forEach((el) => {
    el.classList.toggle("rect-darker-change");
  });
  head_accent.forEach((el) => {
    el.classList.toggle("head-accent-change");
  });
  text_accent.forEach((el) => {
    el.classList.toggle("dark-accent");
  });
  footer_accent.forEach((el) => {
    el.classList.toggle("footer-light-accent");
  });
});

let brdo12 = document.querySelector(".brdo1");
let zadnjebrdo = document.querySelector(".zadnje-brdo");
let svg_header = document.querySelector(".svg-header");
let footer = document.querySelector(".footer");
let layer = document.querySelector(".layer");
let line1 = document.querySelector(".line1");
let line2 = document.querySelector(".line2");
let brdo2 = document.querySelector(".brdo2");
let brdo3 = document.querySelector(".brdo3");
let brdo4 = document.querySelector(".brdo4");
let brdo5 = document.querySelector(".brdo5");
let brdo6 = document.querySelector(".brdo6");
let landscape = document.querySelector(".landscape");
let glavni_naslov = document.querySelector(".glavni-naslov");
let theme_button = document.querySelector(".change-theme");
let theme_light = document.querySelector(".change-theme");
let head_color = document.querySelector(".head-color");
let head_brain = document.querySelector(".head-brain");
let brain_linije = document.querySelectorAll(".brain-linije");
let rect_lighter = document.querySelectorAll(".rect-lighter");
let rect_darker = document.querySelectorAll(".rect-darker");
let head_accent = document.querySelectorAll(".head-accent");
let text_accent = document.querySelectorAll(".light-accent");
let footer_accent = document.querySelectorAll(".footer-accent");
let light_a11y_handle = document.querySelector(".a11y-handle");
let light_a11y_title = document.querySelector(".a11y-title");

// novo navigacija

// let timVine = document.getElementById("tim-vine");
// let navbar = document.getElementById("main-nav");

// let navPos = navbar.getBoundingClientRect().top;

// window.addEventListener("scroll", (e) => {
//   let scrollPos = window.scrollY;
//   if (scrollPos > navPos) {
//     console.log(scrollPos, navPos);
//     navbar.classList.add("sticky");
//     header.classList.add("navbarOffsetMargin");
//   } else {
//     navbar.classList.remove("sticky");
//     header.classList.remove("navbarOffsetMargin");
//   }
// });

// // w3schools navigacija

// // When the user scrolls the page, execute myFunction
// window.onscroll = function () {
//   myFunction();
// };

// // Get the navbar
// var navbar = document.getElementById("main-nav");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   console.log(window.scrollY, sticky);
//   if (window.scrollY >= sticky) {
//     navbar.classList.add("sticky");
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

//a11y

const html = document.documentElement;
const button6 = document.querySelectorAll(".a11y-button");
const reset = document.querySelector(".a11y-reset");
const handle = document.querySelector(".a11y-handle");

let data = [
  {
    name: "size",
    max: 2,
    selected: 0,
  },
  {
    name: "spacing",
    max: 4,
    selected: 0,
  },
  {
    name: "typography",
    max: 1,
    selected: 0,
  },

  {
    name: "contrast",
    max: 2,
    selected: 0,
  },
];

// testing
data.forEach((iris) => console.log(iris));

// testing
console.log(data[0].name);

// handle reveala pannel
handle.addEventListener("click", function () {
  document.querySelector(".a11y-panel").classList.toggle("selected");
});

// svaki klik na button6 (a11y-button) izvrsi 'handleclick'
button6.forEach((item) => {
  item.addEventListener("click", handleClick);
});

// ls stuff
// window.addEventListener("DOMContentLoaded", init);

// reset.addEventListener("click", resetAll);

// function resetAll() {
//   // reset all html classes

//   html.className = "";

//   // reset all button data-selected attributes

//   // button.forEach((item) => {
//   //   item.dataset.selected = 0;
//   // });

//   // reset data object to default
//   for (let i = 0; i < data.length; i++) {
//     data[i].selected = 0;
//   }

//   // reset localStorage
//   localStorage.removeItem("a11yOptions");

//   // run init again
//   init();
// }

function handleClick(e) {
  const action = e.currentTarget.dataset.action;
  const max = e.currentTarget.dataset.max;
  let selected = e.currentTarget.dataset.selected;

  // pobrini se za selected 0-max
  if (selected < max) {
    selected++;
  } else {
    selected = 0;
  }

  // apply to DOM data-selected value
  e.currentTarget.dataset.selected = selected;

  // update data object
  let indexData = data.findIndex((item) => item.name === action);
  data[indexData].selected = selected;

  // split all html classes into array
  htmlClasses = html.className.split(" ");

  // iterate through array and find class that matches clicked and remove it
  for (var i = 0; i < htmlClasses.length; i++) {
    if (htmlClasses[i].indexOf(action) >= 0) {
      html.classList.remove(htmlClasses[i]);
    }
  }

  // add new class with new number
  html.classList.add(`${action}${selected}`);
}

//
//
//
//
//
//
// media prefers thing

const minjajBotun = document.querySelector(".nav-button");

const useDark = window.matchMedia("(prefers-color-scheme: light)");

function toggleDarkMode(state) {
  changeThemeToLight(state);
}

function changeThemeToLight(state) {
  document.body.classList.toggle("body-light-theme", state);
  document.body.classList.toggle("font-color-dark", state);
  brdo12.classList.toggle("brdo-fill", state);
  zadnjebrdo.classList.toggle("brdo-fill", state);
  svg_header.classList.toggle("go-blue", state);
  footer.classList.toggle("go-blue", state);
  layer.classList.toggle("go-blue", state);
  line1.classList.toggle("line1-dark", state);
  line2.classList.toggle("line2-dark", state);
  brdo2.classList.toggle("brdo2-fill", state);
  brdo3.classList.toggle("brdo3-fill", state);
  brdo4.classList.toggle("brdo4-fill", state);
  brdo5.classList.toggle("brdo5-fill", state);
  brdo6.classList.toggle("brdo6-fill", state);
  landscape.classList.toggle("landscape-light", state);
  glavni_naslov.classList.toggle("glavni-naslov-light", state);
  theme_button.classList.toggle("ri-sun-line", state);
  theme_light.classList.toggle("change-theme-light", state);
  head_color.classList.toggle("head-color-change", state);
  head_brain.classList.toggle("head-brain-change", state);

  brain_linije.forEach((el) => {
    el.classList.toggle("brain-linije-change", state);
  });
  rect_lighter.forEach((el) => {
    el.classList.toggle("rect-lighter-change", state);
  });
  rect_darker.forEach((el) => {
    el.classList.toggle("rect-darker-change", state);
  });
  head_accent.forEach((el) => {
    el.classList.toggle("head-accent-change", state);
  });
  text_accent.forEach((el) => {
    el.classList.toggle("dark-accent", state);
  });
  footer_accent.forEach((el) => {
    el.classList.toggle("footer-light-accent", state);
  });
}

toggleDarkMode(useDark.matches);

// kao da ne treba, sada treba refreshati ali radi
// useDark.addEventListener((evt) => toggleDarkMode(evt.matches));
