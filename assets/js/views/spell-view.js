import * as Main from "../utils/manipulationMain.js";
export function createCard(element) {
  const li = document.createElement("li");
  const wrapper = document.createElement("div");
  const cardImg = document.createElement("div");
  const boxData = document.createElement("div");
  const autor = document.createElement("p");
  const titulo = document.createElement("p");

  li.classList.add("fentico");
  wrapper.classList.add("box");
  cardImg.classList.add("box-img");
  cardImg.classList.add("icon-magic-wand");
  boxData.classList.add("box-data");
  titulo.classList.add("title");

  autor.innerHTML = `${element.hechizo}`;
  titulo.innerHTML = `${element.uso}`;

  boxData.appendChild(autor);
  boxData.appendChild(titulo);
  wrapper.appendChild(cardImg);
  wrapper.appendChild(boxData);
  li.appendChild(wrapper);

  return li;
}

export function render(elements) {
  Main.clear();
  Main.addClass(true);
  for (const element of elements) {
    Main.addChildren(createCard(element));
  }
}