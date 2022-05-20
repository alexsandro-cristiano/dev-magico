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
                  alt=""
                  class="card__image"
                />
              </div>
              <div class="card__info card__info--active">
                <h3 class="card__info__title"></h3>
                <i class="card__info__icon icon-arrow-down"></i>
              </div>
            </div>
          </li>
  `
  const mainUl = document.getElementsByClassName('main__list')
}

async function getInformation(url) {
  const response = await fetch(url)
  const jsonBody = await response.json()
  return jsonBody
}

async function switchOption(event) {
  let url = 'https://fedeperin-harry-potter-api.herokuapp.com/'
  let arrayteste = []
  switch (event) {
    case 'livro':
      url += 'libros'
      arrayteste = await getInformation(url)

      console.log('\ntamanho do array = ' + `${arrayteste.length}`)

      arrayteste.forEach((element) => {
        console.log('bla')
        const html = `
          <li class="main__item">
            <div class="card">
              <div class="card__info card__info--active">
                <h3 class="card__info__title">${element.titulo_original}</h3>
                <h3 class="card__info__title">${element.autora}</h3>
                <p class="card__info__title">${element.descripcion}</p>
                <i class="card__info__icon icon-arrow-down"></i>
              </div>
            </div>
          </li>
  `
        const mainUl = document.querySelector('.main__list')
        console.log(mainUl)
        mainUl.insertAdjacentHTML('beforeend', html)
      })
      /**
       * estou fazendo a requisição
       * estou guardando a resposta que é um vetor na variavel
       * estou varrendo a variavel e exibindo no console o nome do livro
       */

      break
    case 'personagem':
      url += 'personajes'
      console.log('\n estou na funcao\n\n\n')
      console.log(await getInformation(url))
      break
    case 'fentico':
      url += 'hechizos'
      console.log('\n estou na funcao\n\n\n')
      console.log(await getInformation(url))
      break
    case 'funcionario':
      url = 'http://hp-api.herokuapp.com/api/characters/staff'
      console.log('\n estou na funcao\n\n\n')
      console.log(await getInformation(url))
      break
  }
}

function init() {
  const sidebarArrow = document.querySelector('.js-icon')
  sidebarArrow.addEventListener('click', () => {
    modifySideBar(sidebarArrow)
  })

  const menuList = document.getElementById('list')
  menuList.addEventListener('click', (event) => {
    switchOption(event.target.id)
  })
}

init()
