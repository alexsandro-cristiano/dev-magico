import * as PageController from "../controllers/page-controller.js";
import * as Main from "../utils/manipulationMain.js";
export function createCard(element) {
  const li = document.createElement("li");
  const wrapper = document.createElement("div");
  const card = document.createElement("div");
  const cardImg = document.createElement("div");
  const cardName = document.createElement("div");
  const image = document.createElement("img");

  li.classList.add("personagem");
  wrapper.classList.add("wrapper");
  card.classList.add("card");
  cardImg.classList.add("card__img");
  cardName.classList.add("card__name");
  cardName.innerHTML = `${element.apodo}`;
  image.setAttribute("src", `${element.imagen}`);
  image.setAttribute("alt", `${element.apodo}`);
  li.setAttribute("id", `${element.id}`);
  cardImg.appendChild(image);
  card.appendChild(cardImg);
  card.appendChild(cardName);
  wrapper.appendChild(card);
  li.appendChild(wrapper);
  return li;
}

export function render(elements) {
  Main.clear();
  Main.addClass(true);
  for (const element of elements) {
    Main.addChildren(createCard(element));
  }
  PageController.observerCaracter(elements);
}