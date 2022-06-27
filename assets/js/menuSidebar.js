import * as request from './request.js'
import * as renderCard from './card.js'
let antigo = ''

async function switchOption(option) {
  let url = 'https://fedeperin-harry-potter-api.herokuapp.com/'
  let informations = []
  activateMenuAtCurrentItem(option)
  switch (option) {
    case 'livro':
      url += 'libros'
      informations = await request.getJson(url)
      for (const inf of informations) {
        renderCard.renderLibros(inf)
      }
      break
    case 'personagem':
      url += 'personajes'
      informations = await request.getJson(url)
      break
    case 'fentico':
      url += 'hechizos'
      informations = await request.getJson(url)
      break
    case 'funcionario':
      url = 'http://hp-api.herokuapp.com/api/characters/staff'
      informations = await request.getJson(url)
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

export function init() {
  const menuList = document.getElementById('list')
  menuList.addEventListener('click', event => {
    switchOption(event.target.id)
  })
}

window.onload = switchOption('livro')
