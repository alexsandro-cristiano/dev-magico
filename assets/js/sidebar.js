import * as menuList from './menuSidebar.js'

function modificarLogo() {
  const tagH1 = document.querySelector('.logo__title')
  tagH1.classList.toggle('logo__title--open')
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
  sidebarArrow.addEventListener('click', () => {
    expandSidebar(sidebarArrow)
  })
}
