import * as Spell from "../views/spell-view.js";
import * as Request from "../services/request-service.js";

export async function init() {
  let datas = [];
  datas = await Request.getJson("hechizos");
  Spell.render(datas);
}