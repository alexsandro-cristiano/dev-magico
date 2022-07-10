import * as Caracter from '../views/caracter-view.js'
import * as Request from '../services/request-service.js'

export async function init(){
    let datas = []   
    datas = await Request.getJson('personajes')
    Caracter.render(datas)
}
