import * as modalController from "./modal-controller.js";

export function observerBook(elements) {
  const books = document.querySelectorAll(".libro");
  books.forEach((book) => {
    book.addEventListener("click", () => {
      modalController.open("book", elements, book.id);
    });
  });
}
export function observerCaracter(elements) {
  const caracters = document.querySelectorAll(".personagem");
  caracters.forEach((caracter) => {
    caracter.addEventListener("click", () => {
      modalController.open("cacracter",elements, caracter.id);
    });
  });

}
