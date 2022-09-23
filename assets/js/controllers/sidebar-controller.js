import * as Book from './book-controller.js';
import * as Caracter from './caracter-controller.js';
import * as Spell from './spell-controller.js';

let toggleLogo = false;
function changeLogo() {
  const logo = document.querySelector('.logo__title');
  logo.classList.toggle('logo__title--open');
  if (toggleLogo == false) {
    logo.innerHTML = 'Dev Mágico';
    toggleLogo = true;
  } else {
    logo.innerHTML = 'DM';
    toggleLogo = false;
  }
}

function handleClickMenuIcon() {
  changeLogo();
  const sidebar = document.querySelector('.sidebar');
  const itemList = document.querySelectorAll('.nav__item__title');
  sidebar.classList.toggle('sidebar--open');
  for (const item of itemList) {
    item.classList.toggle('nav__item__title--open');
  }
}

async function handleClickMenuItems(selectMenuItem) {
  changeItemActive(selectMenuItem);
  switch (selectMenuItem) {
    case 'livro':
      Book.init();
      break;
    case 'personagem':
      Caracter.init();
      break;
    case 'fentico':
      Spell.init();
      break;
  }
}
let oldItemActive = '';
function changeItemActive(selectItem) {
  document.getElementById(`${selectItem}`).classList.add('active');
  if (oldItemActive !== '') {
    document.getElementById(`${oldItemActive}`).classList.remove('active');
  }
  oldItemActive = selectItem;
}

export function init() {
  const menuIcon = document.querySelector('.js-icon');
  menuIcon.addEventListener('click', () => handleClickMenuIcon());

  const sidebarMenuList = document.getElementById('list');
  sidebarMenuList.addEventListener('click', event => {
    handleClickMenuItems(event.target.id);
  });
}
