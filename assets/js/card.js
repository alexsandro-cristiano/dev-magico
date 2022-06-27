export function renderLibros(element, ulMainCard) {
  const html = `
  <li class="item">
           <div class="card">
            <div class="cardHeader">
              <i class="icon-book"></i>
            </div>
            <div class="cardBody">
            <div class="cardTitle">
            ${element.libro}
            </div>
            <p class="card__info__title">${element.descripcion}</p>
            
            </div>
            <div class="cardFooter">
             <h3 class="card__info__title">${element.autora}</h3>
            </div>
           </div>
          </li>
  `
  ulMainCard.insertAdjacentHTML('beforeend', html)
}

export function renderPersonagem(element, ulMainCard) {
  console.log(element)
}
