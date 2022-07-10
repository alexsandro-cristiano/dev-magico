import * as modalController from "./modal-controller.js";
export function observerBook(elements) {
  const libros = document.querySelectorAll(".libro");
  libros.forEach((item) => {
    item.addEventListener("click", () => {
      modalController.open("book", elements, item.id);
    });
  });
}
function escutaPersonagem() {
  modalController.open("cacracter");
}
