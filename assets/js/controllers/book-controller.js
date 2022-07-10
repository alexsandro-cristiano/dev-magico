import * as Request from '../services/request-service.js'
import * as Book from '../views/book-view.js'

export async function init(){
    let datas = []   
    datas = await Request.getJson('libros')
    Book.render(datas)
}