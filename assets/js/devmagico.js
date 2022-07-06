import * as request from './request.js'
import * as renderCard from './card.js'

const main = document.querySelector('#main .list')
let antigo = ''
let chave = 1
function modificarLogo() {
  const logo = document.querySelector('.logo__title')
  if (chave == 1) {
    logo.innerHTML = 'Dev Mágico'
    chave = 0
  } else {
    logo.innerHTML = 'DM'
    chave = 1
  }
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

async function switchOption(option) {
  let url = 'https://fedeperin-harry-potter-api.herokuapp.com/'
  let informations = []
  activateMenuAtCurrentItem(option)
  switch (option) {
    case 'livro':
      url += 'libros'
      main.innerHTML = ''
      informations = await request.getJson(url)
      for (const inf of informations) {
        renderCard.renderLibros(inf, main)
      }
      break
    case 'personagem':
      url = 'http://hp-api.herokuapp.com/api/characters'
      informations = await request.getJson(url)
      main.innerHTML = ''
      for (const inf of informations) {
        renderCard.renderPersonagem(inf, main)
      }
      break
    case 'fentico':
      url += 'hechizos'
      informations = await request.getJson(url)
      main.innerHTML = ''
      for (const inf of informations) {
        renderCard.renderFentico(inf, main)
      }
      break
  }
}

function activateMenuAtCurrentItem(novo) {
  document.getElementById(`${novo}`).classList.add('active')
  if (antigo !== '') {
    document.getElementById(`${antigo}`).classList.remove('active')
  }
  antigo = novo
}

function init() {
  const sidebarArrow = document.querySelector('.js-icon')
  const sidebarMenuList = document.getElementById('list')

  sidebarArrow.addEventListener('click', () => {
    expandSidebar(sidebarArrow)
  })
  sidebarMenuList.addEventListener('click', event => {
    switchOption(event.target.id)
  })
}

init()
window.onload = switchOption('livro')
