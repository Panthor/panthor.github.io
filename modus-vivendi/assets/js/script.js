window.addEventListener("scroll", function () {
  var sukniheader = document.getElementById("l-header");
  var mejajslika = document.getElementById("slika");
  sukniheader.classList.toggle("sticky", window.scrollY > 0);
  mejajslika.classList.toggle("manja", window.scrollY > 0);
});
