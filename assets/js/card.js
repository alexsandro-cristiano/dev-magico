
export function renderFentico(element, ulMainCard) {
  const li = document.createElement('li')
  const wrapper = document.createElement('div')
  const cardImg = document.createElement('div')
  const boxData = document.createElement('div')
  const autor = document.createElement('p')
  const titulo = document.createElement('p')

  li.classList.add('fentico')
  wrapper.classList.add('box')
  cardImg.classList.add('box-img')
  cardImg.classList.add('icon-magic-wand')
  boxData.classList.add('box-data')
  titulo.classList.add('title')

  autor.innerHTML = `${element.hechizo}`
  titulo.innerHTML = `${element.uso}`

  boxData.appendChild(autor)
  boxData.appendChild(titulo)
  wrapper.appendChild(cardImg)
  wrapper.appendChild(boxData)
  li.appendChild(wrapper)

  ulMainCard.appendChild(li)
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
  cardName.innerHTML = `${element.apodo}`
  if (element.image == '') {
    image.src = 'https://images.unsplash.com/photo-1511367461989-f85a21fda167'
  } else {
    image.setAttribute('src', `${element.imagen}`)
  }
  image.setAttribute('alt', `${element.apodo}`)
  li.setAttribute('id', `${element.id}`)
  cardImg.appendChild(image)
  card.appendChild(cardImg)
  card.appendChild(cardName)
  wrapper.appendChild(card)
  li.appendChild(wrapper)

  ulMainCard.appendChild(li)
}
