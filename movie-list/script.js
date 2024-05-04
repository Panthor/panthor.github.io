// let mojBotun = document.querySelector("#mejaj");
// mojBotun.onclick = function () {
//   let novaLista = document.createElement("li");
//   novaLista.textContent = "je li uspilo? :)";
//   document.querySelector(".orderedLista").appendChild(novaLista);
// };

//ovo polovicno radi...kinda
// let mojBotun = document.querySelector("#mejaj");
// mojBotun.onclick = function () {
//   let novaLista = document.createElement("li");
//   novaLista.textContent = "je li uspilo? :)";
//   document.querySelector(".orderedLista").appendChild(novaLista);

//   localStorage.setItem(
//     "mojNaziv",
//     document.querySelector(".orderedLista").value
//   );
// };

let input = document.querySelector("#mojInput");
let h2 = document.querySelector("h2");

input.addEventListener("keyup", prikazi);

function prikazi() {
  h2.innerHTML = input.value;
}
