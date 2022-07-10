import * as Book from "./book-controller.js";
import * as Caracter from "./caracter-controller.js";
let chave = false;
function changeLogo() {
  const logo = document.querySelector(".logo__title");
  logo.classList.toggle("logo__title--open");
  if (chave == false) {
    logo.innerHTML = "Dev Mágico";
    chave = true;
  } else {
    logo.innerHTML = "DM";
    chave = false;
  }
}

function handleClickMenuIcon() {
  changeLogo();
  const sidebar = document.querySelector(".sidebar");
  const itemList = document.querySelectorAll(".nav__item__title");
  sidebar.classList.toggle("sidebar--open");
  for (const item of itemList) {
    item.classList.toggle("nav__item__title--open");
  }
}

async function handleClickOption(option) {
  changeActiveCurrentItem(option);
  switch (option) {
    case "livro":
      Book.init();
      break;
    case "personagem":
      Caracter.init();
      break;
    case "fentico":
      url += "hechizos";
      informations = await request.getJson(url);
      main.innerHTML = "";
      main.classList.add("list");
      for (const inf of informations) {
        renderCard.renderFentico(inf, main);
      }
      break;
    case "sobre":
      main.innerHTML = "";
      main.classList.remove("list");

      break;
  }
}
let antigo = "";
function changeActiveCurrentItem(novo) {
  document.getElementById(`${novo}`).classList.add("active");
  if (antigo !== "") {
    document.getElementById(`${antigo}`).classList.remove("active");
  }
  antigo = novo;
}

export function init() {
  const menuIcon = document.querySelector(".js-icon");
  menuIcon.addEventListener("click", () => handleClickMenuIcon());

  const sidebarMenuList = document.getElementById("list");
  sidebarMenuList.addEventListener("click", (event) => {
    handleClickOption(event.target.id);
  });
}
