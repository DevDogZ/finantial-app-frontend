const BASE_URL = 'http://localhost:8000'

export async function getCategorias() {
  const resposta = await fetch(`${BASE_URL}/categorias`)
  return resposta.json()
}

export async function criarCategoria(nome) {
  const resposta = await fetch(`${BASE_URL}/categorias`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome }),
  })
  return resposta.json()
}