const ulMainCard = document.querySelector('.main .list')

export function renderLibros(element) {
  console.log('cheguei ate a funda renderLibros')
  const html = `
  <li class="item">
           <div class="card">
            <div class="cardHeader">
              <i class="icon icon-book"></i>
            </div>
            <div class="cardBody">
            <h3 class="card__info__title">
            ${element.libro}
            </h3>
              <h3 class="card__info__title">${element.autora}</h3>
              <p class="card__info__title">${element.descripcion}</p>
              
            </div>
            <div class="cardFooter">
              <i class="card__info__icon icon-arrow-down"></i>
            </div>
           </div>
          </li>
  `
  ulMainCard.insertAdjacentHTML('beforeend', html)
}
