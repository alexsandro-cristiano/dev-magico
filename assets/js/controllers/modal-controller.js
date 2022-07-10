function insertInformationBook(
  element,
  id,
  cardImg,
  title,
  subtitle,
  information,
  description
) {
  cardImg.setAttribute("id", `hp${element[id].id}`);
  title.innerHTML = `${element[id].libro}`;
  subtitle.innerHTML = `${element[id].fecha_de_lanzamiento}`;
  information.innerHTML = `${element[id].autora}`;
  description.innerHTML = `${element[id].descripcion}`;
}
function insertInformationCharacter(
  element,
  id,
  cardImg,
  title,
  subtitle,
  information,
  description
) {
  cardImg.setAttribute("src", element[id].imagen);
  title.innerHTML = `${element[id].personaje}`;
  information.innerHTML = `Apodo ${element[id].apodo}`;
  subtitle.innerHTML = `Casa de Hogwarts ${element[id].casaDeHogwarts}`;
  description.innerHTML = `Interpretado por ${element[id].interpretado_por}`;
}
function createIcon() {
  const icon = document.createElement("i");
  icon.classList.add("icon");
  icon.classList.add("icon-x");
  icon.classList.add("fechar");
  return icon;
}
function createElement(who, element, id) {
  const wrapper = document.createElement("div");
  const cardImg = document.createElement("img");
  const wrapperData = document.createElement("div");
  const title = document.createElement("p");
  const subtitle = document.createElement("p");
  const information = document.createElement("p");
  const description = document.createElement("p");

  cardImg.classList.add("img");
  wrapper.classList.add("wrapper");
  wrapperData.classList.add("informacao");
  title.classList.add("title");
  subtitle.classList.add("sub-title");
  information.classList.add("sub-title");
  description.classList.add("description");
  who == "book"
    ? insertInformationBook(
        element,
        --id,
        cardImg,
        title,
        subtitle,
        information,
        description
      )
    : insertInformationCharacter(
        element,
        --id,
        cardImg,
        title,
        subtitle,
        information,
        description
      );
  wrapperData.appendChild(title);
  wrapperData.appendChild(information);
  wrapperData.appendChild(subtitle);
  wrapperData.appendChild(description);
  wrapper.appendChild(cardImg);
  wrapper.appendChild(wrapperData);
  return wrapper;
}
function fecharModal(modal, modalConteudo) {
  const iconX = document.querySelector(".fechar");
  iconX.addEventListener("click", () => {
    modalConteudo.innerHTML = "";
    modal.classList.remove("active");
  });
}
export function open(who, element, id) {
  const modal = document.querySelector(".modalContainer");
  const modalConteudo = document.querySelector(".modalConteudo");
  modal.classList.add("active");
  modalConteudo.appendChild(createIcon());
  modalConteudo.appendChild(createElement(who, element, id));
  fecharModal(modal, modalConteudo);
}
