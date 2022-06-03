import * as sidebar from './sidebar.js'
import * as menuList from './menuSidebar.js'

function openInformation(cardArrow) {
  cardArrow.classList.toggle('icon-arrow-down')
  cardArrow.classList.toggle('icon-arrow-up')
}

function init() {
  const cardArrow = document.querySelectorAll('.js-icon-arrow-card')
  console.log(cardArrow)
  cardArrow.addEventListener('click', () => {
    openInformation(cardArrow)
  })
}

sidebar.init()
menuList.init()
init()
