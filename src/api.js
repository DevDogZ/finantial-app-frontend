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

export async function getContas() {
  const resposta = await fetch(`${BASE_URL}/contas`)
  return resposta.json()
}

export async function criarContas(nome, saldoInicial) {
  const resposta = await fetch(`${BASE_URL}/contas`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json' },
    body: JSON.stringify({ nome, saldo_inicial: saldoInicial }),
  })
  return resposta.json()
}

export async function getTransacoes(){
  const resposta = await fetch(`${BASE_URL}/transacoes`)
  return resposta.json()
}

export async function criarTransacao(dados) {
  const resposta = await fetch(`${BASE_URL}/transacoes`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados),
  })
  return resposta.json()
}

