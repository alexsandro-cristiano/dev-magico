function modificarLogo() {
  const h1 = document.querySelector('.logo__title')
  h1.classList.toggle('logo__title--open')
}

function ToggleSideBar(sidebarArrow) {
  modificarLogo()
  const sidebar = document.querySelector('.sidebar')
  const itemList = document.querySelectorAll('.nav__item__title')

  sidebar.classList.toggle('sidebar--open')
  sidebarArrow.classList.toggle('icon-arrow-right')
  sidebarArrow.classList.toggle('icon-arrow-left')

  for (const element of itemList) {
    element.classList.toggle('nav__item__title--open')
  }
}

function init() {
  const sidebarArrow = document.querySelector('.js-icon')
  sidebarArrow.addEventListener('click', () => {
    ToggleSideBar(sidebarArrow)
  })
}

init()
