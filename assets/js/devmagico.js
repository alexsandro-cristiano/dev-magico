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

  for (const item of itemList) {
    item.classList.toggle('nav__item__title--open')
  }
}

async function getInformation(url) {
  const response = await fetch(url)
  const jsonBody = await response.json()
  return jsonBody
}

async function switchOption(event) {
  let url = 'https://fedeperin-harry-potter-api.herokuapp.com/'
  let information = []
  switch (event) {
    case 'livro':
      url += 'libros'
      information = await getInformation(url)

      /**
       * information é 1 vetor com todos os dados já salvos
       *
       * quero exibir na tela de 10 em 10
       */
      console.log(information)
      break
    case 'personagem':
      url += 'personajes'
      information = await getInformation(url)
      console.log(information)
      break
    case 'fentico':
      url += 'hechizos'
      information = await getInformation(url)
      console.log(information)
      break
    case 'funcionario':
      url = 'http://hp-api.herokuapp.com/api/characters/staff'
      information = await getInformation(url)
      console.log(information)
      break
  }
}

function openInformation(cardArrow) {
  cardArrow.classList.toggle('icon-arrow-down')
  cardArrow.classList.toggle('icon-arrow-up')
}

function init() {
  const sidebarArrow = document.querySelector('.js-icon')
  sidebarArrow.addEventListener('click', () => {
    modifySideBar(sidebarArrow)
  })

  const cardArrow = document.querySelectorAll('.js-icon-arrow-card')
  console.log(cardArrow)
  cardArrow.addEventListener('click', () => {
    openInformation(cardArrow)
  })

  const menuList = document.getElementById('list')
  menuList.addEventListener('click', (event) => {
    switchOption(event.target.id)
  })
}

init()
