export async function getJson(url) {
  const response = await fetch(url)
  const jsonBody = await response.json()
  return jsonBody
}
