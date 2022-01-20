/*
<div class="dm-card-container">
        <img
          src="http://hp-api.herokuapp.com/images/hermione.jpeg"
          class=
          alt=""
        />
        <div class=>
          <h5 class=>nome do personagem</h5>
        </div>
      </div>
 */

async function getJson(url) {
  try {
    const response = await fetch(url);
    const jsonBody = await response.json();
    return jsonBody;
  } catch (e) {
    throw new RequestException("Erro na requisição.");
  }
}

function criarCartao(infoPersonagem) {
    const divContainer = document.createElement('div')
    const img = document.createElement('img')
    const divBody = document.createElement('div')
    const h5 = document.createElement('h5')

    divContainer.classList.add("dm-card-container")
    img.classList.add("rounded-circle")
    divBody.classList.add("card-body")
    h5.classList.add("card-title")
    
    img.setAttribute('src', "http://hp-api.herokuapp.com/images/lupin.jpg")
    h5.innerHTML = 'deu certo'

    divBody.appendChild(h5)
    divContainer.appendChild(img)
    divContainer.appendChild(divBody)
    return divContainer
}
console.log(criarCartao())

const root = document.querySelector('#root')
root.appendChild(criarCartao())