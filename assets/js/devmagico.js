import * as sidebar from './sidebar.js'

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
  const cardArrow = document.querySelectorAll('.js-icon-arrow-card')
  console.log(cardArrow)
  cardArrow.addEventListener('click', () => {
    openInformation(cardArrow)
  })

  const menuList = document.getElementById('list')
  menuList.addEventListener('click', event => {
    switchOption(event.target.id)
  })
}

sidebar.init()
init()
