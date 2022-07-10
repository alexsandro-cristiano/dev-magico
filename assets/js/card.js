
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
