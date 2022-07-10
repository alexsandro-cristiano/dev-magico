let chave = false
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

export function init() {
  const menuIcon = document.querySelector(".js-icon");
  menuIcon.addEventListener("click", () => handleClickMenuIcon());
}
