//pozdravna svg animacija

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      tocka.classList.add("haha");

      tocka2.classList.add("haha");
      tocka3.classList.add("imgshow");
    }
  });
});

const hiddenElements2 = document.querySelectorAll(".line1");
hiddenElements2.forEach((el) => observer2.observe(el));

let tocka = document.querySelector(".line1");
let tocka2 = document.querySelector(".line2");
let tocka3 = document.querySelector(".kakaka");

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

const observer3 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      trigger.classList.add("showshit");
      trigger2.classList.add("showshit");
    }
  });
});

const hiddenElements3 = document.querySelectorAll(".approach-h2");
hiddenElements3.forEach((el) => observer3.observe(el));

let trigger = document.querySelector(".approach-h2");
let trigger2 = document.querySelector(".approach-p");

const observer4 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      triggerdesni.classList.add("pojmadesna");
    }
  });
});

const hiddenElements4 = document.querySelectorAll(".sredina-svgg");
hiddenElements4.forEach((el) => observer4.observe(el));

let triggerdesni = document.querySelector(".pojmanemam");

// josssss

const observer5 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      triggerlijevi.classList.add("pojmalijeva");
    }
  });
});

const hiddenElements5 = document.querySelectorAll(".sredina-svgg");
hiddenElements5.forEach((el) => observer5.observe(el));

let triggerlijevi = document.querySelector(".lijevopojma");

// sredina lijevo i desno

const observer6 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      trigger3.classList.add("pojavise");
      trigger4.classList.add("pojavise");
    }
  });
});

const hiddenElements6 = document.querySelectorAll(".approach-flex");
hiddenElements6.forEach((el) => observer6.observe(el));

let trigger3 = document.querySelector(".odlijeva");
let trigger4 = document.querySelector(".oddesna");
