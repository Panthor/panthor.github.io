const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      // entry.target.classList.add("show");
      sukni.classList.add("show");
      sukni2.classList.add("show");
      sukni3.classList.add("show");
      sukni4.classList.add("show");
    }
    // making ovaj else ako zelis da se animacija ne ponavlja
    else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".bottom");
hiddenElements.forEach((el) => observer.observe(el));

// nesto moje
let sukni = document.querySelector(".box");
let sukni2 = document.querySelector(".box2");
let sukni3 = document.querySelector(".box3");
let sukni4 = document.querySelector(".box4");

// HYPERFLEXED STUFF - SPLIT SLIDER

const left = document.getElementById("left-side");

const handleOnMove = (e) => {
  const p = (e.clientX / window.innerWidth) * 100;

  left.style.width = `${p}%`;
};

document.onmousemove = (e) => handleOnMove(e);
document.ontouchmove = (e) => handleOnMove(e.touches[0]);

//svg animacija kao u egardenu

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      // entry.target.classList.add("show");
      tocka.classList.add("haha");

      tocka2.classList.add("haha");
      tocka3.classList.add("imgshow");
    }
    // making ovaj else ako zelis da se animacija ne ponavlja
    // else {
    //   entry.target.classList.remove("haha");
    // }
  });
});

const hiddenElements2 = document.querySelectorAll(".line1");
hiddenElements2.forEach((el) => observer2.observe(el));

let tocka = document.querySelector(".line1");
let tocka2 = document.querySelector(".line2");
let tocka3 = document.querySelector(".kakaka");

// NOVI HEADER

// constant elements: your main scrolling element; html element
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
      // entry.target.classList.add("show");
      trigger.classList.add("showshit");
      trigger2.classList.add("showshit");
    }
    // making ovaj else ako zelis da se animacija ne ponavlja
    // else {
    //   entry.target.classList.remove("haha");
    // }
  });
});

const hiddenElements3 = document.querySelectorAll(".approach-h2");
hiddenElements3.forEach((el) => observer3.observe(el));

let trigger = document.querySelector(".approach-h2");
let trigger2 = document.querySelector(".approach-p");

// jos animacija

const observer4 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      // entry.target.classList.add("show");
      triggerdesni.classList.add("pojmadesna");
    }
    // making ovaj else ako zelis da se animacija ne ponavlja
    // else {
    //   entry.target.classList.remove("haha");
    // }
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
      // entry.target.classList.add("show");
      triggerlijevi.classList.add("pojmalijeva");
    }
    // making ovaj else ako zelis da se animacija ne ponavlja
    // else {
    //   entry.target.classList.remove("haha");
    // }
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
      // entry.target.classList.add("show");

      trigger3.classList.add("pojavise");
      trigger4.classList.add("pojavise");
    }
    // making ovaj else ako zelis da se animacija ne ponavlja
    // else {
    //   entry.target.classList.remove("haha");
    // }
  });
});

const hiddenElements6 = document.querySelectorAll(".approach-flex");
hiddenElements6.forEach((el) => observer6.observe(el));

let trigger3 = document.querySelector(".odlijeva");
let trigger4 = document.querySelector(".oddesna");
