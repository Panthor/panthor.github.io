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
