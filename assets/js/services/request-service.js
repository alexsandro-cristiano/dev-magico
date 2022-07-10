export async function getJson(param) {
  const url = `https://fedeperin-harry-potter-api.herokuapp.com/${param}`
  try{
    const response = await fetch(url);
  const jsonBody = await response.json();
  return jsonBody;
  }
  catch(e){
    throw new RequestException("Erro na requisição.");
  }
}