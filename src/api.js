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

export async function criarConta(nome, saldoInicial) {
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

export async function contribuirMeta(metaId, valor) {
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
    const erro = await resposta.json()
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

export async function getDividas() {
  const resposta = await fetch(`${BASE_URL}/dividas`)
  return resposta.json()
}

export async function criarDivida(dados) {
  const resposta = await fetch(`${BASE_URL}/dividas`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(dados)
  })

  if(!resposta.ok) {
    const erro = await resposta.json()
    throw new Error(erro.detail)
  }

  return resposta.json()
}

export async function pagarParcelaDivida(dividaId){
  const resposta = await fetch(`${BASE_URL}/dividas/${dividaId}/pagar-parcela`, {
    method: 'POST'
  })

  if(!resposta.ok){
    const erro = await resposta.json()
    throw new Error(erro.detail)
  }

  return resposta.json()
}

export async function getCartoes(){
  const resposta = await fetch(`${BASE_URL}/cartoes`)
  return resposta.json()
}

export async function criarCartao(dados){
  const resposta = await fetch(`${BASE_URL}/cartoes`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados)
  })
  return resposta.json()
}

export async function criarCompraCartao(dados){
  const resposta = await fetch(`${BASE_URL}/compras-cartao`, {
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

export async function getFatura(cartaoId, mes, ano){
  const resposta = await fetch(`${BASE_URL}/cartoes/${cartaoId}/fatura?mes=${mes}&ano=${ano}`)
  return resposta.json()
}

export async function getSaldoConta(contaId){
  const resposta = await fetch(`${BASE_URL}/contas/${contaId}/saldo`)
  return resposta.json()
}

export async function deletarCategoria(categoriaId) {
  const resposta = await fetch(`${BASE_URL}/categorias/${categoriaId}`, {
    method: 'DELETE',
  })

  if (!resposta.ok) {
    const erro = await resposta.json()
    throw new Error(erro.detail)
  }

  return resposta.json()
}

export async function deletarConta(contaId) {
  const resposta = await fetch(`${BASE_URL}/contas/${contaId}`, {
    method: 'DELETE',
  })

  if (!resposta.ok) {
    const erro = await resposta.json()
    throw new Error(erro.detail)
  }

  return resposta.json()
}

export async function deletarTransacao(transacaoId) {
  const resposta = await fetch(`${BASE_URL}/transacoes/${transacaoId}`, {
    method: 'DELETE',
  })
  return resposta.json()
}

export async function deletarOrcamento(orcamentoId) {
  const resposta = await fetch(`${BASE_URL}/orcamentos/${orcamentoId}`, {
    method: 'DELETE',
  })
  return resposta.json()
}

export async function deletarMeta(metaId) {
  const resposta = await fetch(`${BASE_URL}/metas/${metaId}`, {
    method: 'DELETE',
  })
  return resposta.json()
}

export async function deletarDivida(dividaId) {
  const resposta = await fetch(`${BASE_URL}/dividas/${dividaId}`, {
    method: 'DELETE',
  })
  return resposta.json()
}

export async function deletarCartao(cartaoId) {
  const resposta = await fetch(`${BASE_URL}/cartoes/${cartaoId}`, {
    method: 'DELETE',
  })

  if (!resposta.ok) {
    const erro = await resposta.json()
    throw new Error(erro.detail)
  }

  return resposta.json()
}