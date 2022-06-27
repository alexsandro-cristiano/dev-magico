import * as request from './request.js'

async function switchOption(option) {
  let url = 'https://fedeperin-harry-potter-api.herokuapp.com/'
  let informations = []
  activateMenuAtCurrentItem(option)
  switch (option) {
    case 'livro':
      url += 'libros'
      informations = await request.getJson(url)
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
      activateMenuAtCurrentItem('funcionario')

      break
  }
}

let antigo = 'num'
function activateMenuAtCurrentItem(novo) {
  document.getElementById(`${novo}`).classList.add('active')
  document.getElementById(`${antigo}`).classList.remove('active')
  /*
  document
    .querySelector('nav ul li a[href*=' + sectionId + ']')
    .classList.remove('active')*/
  antigo = novo
  /**
   *
   * remove do anterior
   * adiciona no novo
   */
}

export function init() {
  const menuList = document.getElementById('list')
  menuList.addEventListener('click', event => {
    switchOption(event.target.id)
  })
}
