import * as menuList from './menuSidebar.js'
function modificarLogo() {
  const logo = document.querySelector('.logo__title')
  logo.classList.toggle('logo__title--open')
}

function expandSidebar(sidebarArrow) {
  modificarLogo()
  const sidebar = document.querySelector('.sidebar')
  const itemList = document.querySelectorAll('.nav__item__title')

  sidebar.classList.toggle('sidebar--open')
  sidebarArrow.classList.toggle('icon-arrow-right')
  sidebarArrow.classList.toggle('icon-arrow-left')

  for (const item of itemList) {
    item.classList.toggle('nav__item__title--open')
  }
}

export function init() {
  const sidebarArrow = document.querySelector('.js-icon')
  menuList.init()
  sidebarArrow.addEventListener('click', () => {
    expandSidebar(sidebarArrow)
  })
}
