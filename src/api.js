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


export async function getOrcamentos(){
  const resposta = await fetch(`${BASE_URL}/orcamentos`)
  return resposta.json()
}

export async function criarOrcamento(dados){
  const resposta = await fetch(`${BASE_URL}/orcamentos`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados)
  })

  if(!resposta.ok){
    const erro = await resposta.json()
    throw new Error(erro.detail)
  }

  return resposta.json()
}

export async function getMetas() {
  const resposta = await fetch(`${BASE_URL}/metas`)
  return resposta.json()
}

export async function criarMeta(nome, valorAlvo) {
  const resposta = await fetch(`${BASE_URL}/metas`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify( {nome, valor_alvo: valorAlvo })
  })
  return resposta.json()
}

export async function contribuirMeta( metaId, valorAlvo) {
  const resposta = await fetch(`${BASE_URL}/metas/${metaId}/contribuir`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({ valor })
  })

  if(!resposta.ok) {
    const erro = await resposta.json()
    throw new Error(erro.detail)
  }

  return resposta.json()
}

export async function getContasFixas() {
  const resposta = await fetch(`${BASE_URL}/contas-fixas`)
  return resposta.json()
}

export async function criarContaFixa(dados) {
  const resposta = await fetch(`${BASE_URL}/contas-fixas`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(dados)
  })

  if(!resposta.ok){
    return erro = await resposta.json()
    throw new Error(erro.detail)
  }

  return resposta.json()
}

export async function pagarContaFixa(contaFixaId){
  const resposta = await fetch(`${BASE_URL}/contas-fixas/${contaFixaId}/pagar`, {
    method: 'POST', 
  })
  return resposta.json()
}

export async function desativarContaFixa(contaFixaId) {
  const resposta = await fetch(`${BASE_URL}/contas-fixas/${contaFixaId}`, {
    method: 'DELETE',
  })
  return resposta.json()
}
