function modificarLogo() {
  const h1 = document.querySelector('.logo__title')
  h1.classList.toggle('logo__title--open')
}

function modifySideBar(sidebarArrow) {
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

function renderInfo(event) {
  switch (event) {
    case 'livro':
      console.log('livro')
      break
    case 'personagem':
      console.log('personagem')
      break
    case 'funcionario':
      console.log('funcionario')
      break
    case 'fentico':
      console.log('fentico')
      break
  }
}

function init() {
  const sidebarArrow = document.querySelector('.js-icon')
  sidebarArrow.addEventListener('click', () => {
    modifySideBar(sidebarArrow)
  })

  const list = document.getElementById('list')
  list.addEventListener('click', event => {
    renderInfo(event.target.id)
  })
}

init()
