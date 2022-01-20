async function getJson(url) {
  try {
    const response = await fetch(url);
    const jsonBody = await response.json();
    return jsonBody;
  } catch (e) {
    throw new RequestException("Erro na requisição.");
  }
}

function criarCartao(p) {
  const divContainer = document.createElement("div");
  const img = document.createElement("img");
  const divBody = document.createElement("div");
  const h5 = document.createElement("h5");

  divContainer.classList.add("dm-card-container");
  img.classList.add("rounded-circle");
  divBody.classList.add("card-body");
  h5.classList.add("card-title");

  img.setAttribute("src", `${p.image ?? null}`);
  h5.innerHTML = p.name;

  divBody.appendChild(h5);
  divContainer.appendChild(img);
  divContainer.appendChild(divBody);
  return divContainer;
}

async function init() {
  const url = "http://hp-api.herokuapp.com/api/characters";
  const personagem = await getJson(url);

  console.log(personagem)

  const root = document.querySelector("#root");

  personagem.forEach((element) => {
    root.appendChild(criarCartao(element));
  });
}

init()