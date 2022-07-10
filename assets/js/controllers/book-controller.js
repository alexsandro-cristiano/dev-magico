import * as Request from '../services/request-service.js'
import * as Book from '../views/book-view.js'

export async function init(){
    let url = 'https://fedeperin-harry-potter-api.herokuapp.com/libros'
    let datas = []   
    datas = await Request.getJson(url)
    Book.render(datas)

   /*
    const libros = document.querySelectorAll('.libro')
    console.log(libros)
    libros.forEach(el => {
      el.addEventListener('click', () => {
        dc(informations, el.id)
      })
    })*/
}