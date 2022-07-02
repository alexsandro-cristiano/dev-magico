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

export function renderFentico(element, ulMainCard) {
  const html = `
  <li class="item">
           <div class="card cardFentico">
            <div class="cardHeader">
              <i class="icon-magic-wand"></i>
            </div>
            <div class="cardBody">
            <div class="cardTitle">
            ${element.hechizo}
            </div>
            <p class="card__info__title">${element.uso}</p>
            
            </div>
           </div>
          </li>
  `
  ulMainCard.insertAdjacentHTML('beforeend', html)
}

export function renderPersonagem(element, ulMainCard) {
  const li = document.createElement('li')
  const wrapper = document.createElement('div')
  const card = document.createElement('div')
  const cardImg = document.createElement('div')
  const cardName = document.createElement('div')
  const image = document.createElement('img')

  li.classList.add('personagem')
  wrapper.classList.add('wrapper')
  card.classList.add('card')
  cardImg.classList.add('card__img')
  cardName.classList.add('card__name')
  cardName.innerHTML = `${element.name}`
  if (element.image == '') {
    image.src = 'https://images.unsplash.com/photo-1511367461989-f85a21fda167'
  } else {
    image.setAttribute('src', `${element.image}`)
  }
  image.setAttribute('alt', `${element.name}`)

  cardImg.appendChild(image)
  card.appendChild(cardImg)
  card.appendChild(cardName)
  wrapper.appendChild(card)
  li.appendChild(wrapper)

  ulMainCard.appendChild(li)
}
