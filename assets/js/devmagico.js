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

async function getInformation(url) {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      //o que fazer aqui ?
    })
    .catch(e => console.log(e))
}

/**
 * pegar as coisas daqui e exibir na tela lá no html
 */
function naosei() {
  const html = `
  <li class="main__item">
            <div class="card">
              <div class="card__image__container">
                <img
                  src=""
                  alt="TESTE"
                  class="card__image"
                />
              </div>
              <div class="card__info card__info--active">
                <h3 class="card__info__title">Teste 1</h3>
                <i class="card__info__icon icon-arrow-down"></i>
              </div>
            </div>
          </li>
  `
  const mainUl = document.getElementsByClassName('main__list')
}

function switchOption(event) {
  let url = 'https://fedeperin-harry-potter-api.herokuapp.com/'
  let information
  switch (event) {
    case 'livro':
      url += 'libros'
      getInformation(url)
      break
    case 'personagem':
      url += 'personajes'
      getInformation(url)
      break
    case 'fentico':
      url += 'hechizos'
      getInformation(url)
      break
    case 'funcionario':
      url = 'http://hp-api.herokuapp.com/api/characters/staff'
      getInformation(url)
      break
  }
}

function init() {
  const sidebarArrow = document.querySelector('.js-icon')
  sidebarArrow.addEventListener('click', () => {
    modifySideBar(sidebarArrow)
  })

  const menuList = document.getElementById('list')
  menuList.addEventListener('click', event => {
    switchOption(event.target.id)
  })
}

init()
