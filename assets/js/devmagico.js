import * as Sidebar from './controllers/sidebar-controler.js'
import * as request from './request.js'
import * as renderCard from './card.js'

const main = document.querySelector('#main')


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
  subtitleAutor.innerHTML = `Apodo ${element[id].apodo}`
  subtitleFecha.innerHTML = `Casa de Hogwarts ${element[id].casaDeHogwarts}`
  description.innerHTML = `Interpretado por ${element[id].interpretado_por}`

  wrapperData.appendChild(title)
  wrapperData.appendChild(subtitleAutor)
  wrapperData.appendChild(subtitleFecha)
  wrapperData.appendChild(description)
  wrapper.appendChild(cardImg)
  wrapper.appendChild(wrapperData)
  modalConteudo.appendChild(i)
  modalConteudo.appendChild(wrapper)
  fecharModal(modal, modalConteudo)
}



Sidebar.init()
//window.onload = switchOption('sobre')

/**
 * MVC
 * 
 * Model -> livro | Personagem | fentiço
 * View ->
 * Controler -> Livro | Personagem | fentiço | modal
 */