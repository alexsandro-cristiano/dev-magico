import * as request from './request.js'
import * as renderCard from './card.js'

const main = document.querySelector('#main')
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

function expandSidebar() {
  modificarLogo()
  const sidebar = document.querySelector('.sidebar')
  const itemList = document.querySelectorAll('.nav__item__title')
  sidebar.classList.toggle('sidebar--open')
  for (const item of itemList) {
    item.classList.toggle('nav__item__title--open')
  }
}

function fecharModal(modal, modalConteudo) {
  console.log('fechar modal')
  const iconX = document.querySelector('.fechar')
  iconX.addEventListener('click', () => {
    modalConteudo.innerHTML = ''
    modal.classList.remove('active')
  })
}
function dc(element, id) {
  const modal = document.querySelector('.modalContainer')
  const modalConteudo = document.querySelector('.modalConteudo')
  modal.classList.add('active')

  const i = document.createElement('i')
  const wrapper = document.createElement('div')
  const cardImg = document.createElement('img')
  const wrapperData = document.createElement('div')
  const title = document.createElement('p')
  const subtitleFecha = document.createElement('p')
  const subtitleAutor = document.createElement('p')
  const description = document.createElement('p')
  i.classList.add('icon')
  i.classList.add('icon-x')
  i.classList.add('fechar')
  cardImg.classList.add('img')
  wrapper.classList.add('wrapper')
  wrapperData.classList.add('informacao')
  title.classList.add('title')
  subtitleFecha.classList.add('sub-title')
  subtitleAutor.classList.add('sub-title')
  description.classList.add('description')
  --id
  cardImg.setAttribute('id', `hp${element[id].id}`)
  title.innerHTML = `${element[id].libro}`
  subtitleFecha.innerHTML = `${element[id].fecha_de_lanzamiento}`
  subtitleAutor.innerHTML = `${element[id].autora}`
  description.innerHTML = `${element[id].descripcion}`

  wrapperData.appendChild(title)
  wrapperData.appendChild(subtitleFecha)
  wrapperData.appendChild(subtitleAutor)
  wrapperData.appendChild(description)
  wrapper.appendChild(cardImg)
  wrapper.appendChild(wrapperData)
  modalConteudo.appendChild(i)
  modalConteudo.appendChild(wrapper)
  fecharModal(modal, modalConteudo)
}
function ac(element, id) {
  const modal = document.querySelector('.modalContainer')
  const modalConteudo = document.querySelector('.modalConteudo')
  modal.classList.add('active')

  const i = document.createElement('i')
  const wrapper = document.createElement('div')
  const cardImg = document.createElement('img')
  const wrapperData = document.createElement('div')
  const title = document.createElement('p')
  const subtitleFecha = document.createElement('p')
  const subtitleAutor = document.createElement('p')
  const description = document.createElement('p')
  i.classList.add('icon')
  i.classList.add('icon-x')
  i.classList.add('fechar')
  cardImg.classList.add('img')
  wrapper.classList.add('wrapper')
  wrapperData.classList.add('informacao')
  title.classList.add('title')
  subtitleFecha.classList.add('sub-title')
  subtitleAutor.classList.add('sub-title')
  description.classList.add('description')
  --id
  cardImg.setAttribute('src', element[id].imagen)
  title.innerHTML = `${element[id].personaje}`
  subtitleFecha.innerHTML = `${element[id].casaDeHogwarts}`

  wrapperData.appendChild(title)
  wrapperData.appendChild(subtitleFecha)
  wrapperData.appendChild(subtitleAutor)
  wrapperData.appendChild(description)
  wrapper.appendChild(cardImg)
  wrapper.appendChild(wrapperData)
  modalConteudo.appendChild(i)
  modalConteudo.appendChild(wrapper)
  fecharModal(modal, modalConteudo)
}
async function switchOption(option) {
  let url = 'https://fedeperin-harry-potter-api.herokuapp.com/'
  let informations = []
  activateMenuAtCurrentItem(option)
  switch (option) {
    case 'livro':
      url += 'libros'
      main.innerHTML = ''
      main.classList.add('list')
      informations = await request.getJson(url)
      for (const inf of informations) {
        renderCard.renderLibros(inf, main)
      }
      const libros = document.querySelectorAll('.libro')
      console.log(libros)
      libros.forEach(el => {
        el.addEventListener('click', () => {
          dc(informations, el.id)
        })
      })
      break
    case 'personagem':
      url += 'personajes'
      informations = await request.getJson(url)
      main.innerHTML = ''
      main.classList.add('list')
      for (const inf of informations) {
        renderCard.renderPersonagem(inf, main)
      }
      const personagem = document.querySelectorAll('.personagem')
      personagem.forEach(el => {
        el.addEventListener('click', () => {
          ac(informations, el.id)
        })
      })
      break
    case 'fentico':
      url += 'hechizos'
      informations = await request.getJson(url)
      main.innerHTML = ''
      main.classList.add('list')
      for (const inf of informations) {
        renderCard.renderFentico(inf, main)
      }
      break
    case 'sobre':
      main.innerHTML = ''
      main.classList.remove('list')

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
  const menuIcon = document.querySelector('.js-icon')
  const sidebarMenuList = document.getElementById('list')

  menuIcon.addEventListener('click', () => {
    expandSidebar()
  })
  sidebarMenuList.addEventListener('click', event => {
    switchOption(event.target.id)
  })
}

init()
window.onload = switchOption('sobre')
