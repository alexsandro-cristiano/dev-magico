import * as request from './request.js'

async function switchOption(event) {
  let url = 'https://fedeperin-harry-potter-api.herokuapp.com/'
  let information = []
  switch (event) {
    case 'livro':
      url += 'libros'
      information = await request.getJson(url)

      /**
       * information é 1 vetor com todos os dados já salvos
       *
       * quero exibir na tela de 10 em 10
       */
      console.log(information)
      break
    case 'personagem':
      url += 'personajes'
      information = await request.getJson(url)
      console.log(information)
      break
    case 'fentico':
      url += 'hechizos'
      information = await request.getJson(url)
      console.log(information)
      break
    case 'funcionario':
      url = 'http://hp-api.herokuapp.com/api/characters/staff'
      information = await request.getJson(url)
      console.log(information)
      break
  }
}

export function init() {
  const menuList = document.getElementById('list')
  menuList.addEventListener('click', event => {
    console.log(event.target.id)
    switchOption(event.target.id)
    /*
        identificar quem esta ativa
          remover a classe active
        adicionar a classe active no cara q cliquei
      */
  })
}
