const BASE_URL = 'http://localhost:8000'

function getToken() {
  return localStorage.getItem('access_token')
}

async function request(endpoint, options = {}) {
  const token = getToken()

  const headers = {
    ...(options.body ? { 'Content-Type': 'application/json' } : {}),
    ...(options.headers || {}),
  }

  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  const resposta = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers,
  })

  if (!resposta.ok) {
    let erro

    try {
      erro = await resposta.json()
    } catch {
      erro = {
        detail: 'Ocorreu um erro na comunicação com o servidor',
      }
    }

    if (resposta.status === 401) {
      localStorage.removeItem('access_token')
    }

    throw new Error(
      erro.detail || 'Ocorreu um erro na comunicação com o servidor'
    )
  }

  return resposta.json()
}


// ============================================================
// AUTENTICAÇÃO
// ============================================================

export async function cadastrarUsuario(nome, email, senha) {
  return request('/cadastro', {
    method: 'POST',
    body: JSON.stringify({
      nome,
      email,
      senha,
    }),
  })
}

export async function login(email, senha) {
  const resposta = await request('/login', {
    method: 'POST',
    body: JSON.stringify({
      email,
      senha,
    }),
  })

  localStorage.setItem('access_token', resposta.access_token)

  return resposta
}

export async function getUsuarioAtual() {
  return request('/me')
}

export function logout() {
  localStorage.removeItem('access_token')
}

export function estaAutenticado() {
  return Boolean(getToken())
}


// ============================================================
// CATEGORIAS
// ============================================================

export async function getCategorias() {
  return request('/categorias')
}

export async function criarCategoria(nome, cor) {
  return request('/categorias', {
    method: 'POST',
    body: JSON.stringify({ nome, cor }),
  })
}

export async function deletarCategoria(categoriaId) {
  return request(`/categorias/${categoriaId}`, {
    method: 'DELETE',
  })
}


// ============================================================
// CONTAS
// ============================================================

export async function getContas() {
  return request('/contas')
}

export async function criarConta(nome, saldoInicial) {
  return request('/contas', {
    method: 'POST',
    body: JSON.stringify({
      nome,
      saldo_inicial: saldoInicial,
    }),
  })
}

export async function deletarConta(contaId) {
  return request(`/contas/${contaId}`, {
    method: 'DELETE',
  })
}

export async function getSaldoConta(contaId) {
  return request(`/contas/${contaId}/saldo`)
}


// ============================================================
// TRANSAÇÕES
// ============================================================

export async function getTransacoes() {
  return request('/transacoes')
}

export async function criarTransacao(dados) {
  return request('/transacoes', {
    method: 'POST',
    body: JSON.stringify(dados),
  })
}

export async function deletarTransacao(transacaoId) {
  return request(`/transacoes/${transacaoId}`, {
    method: 'DELETE',
  })
}


// ============================================================
// ORÇAMENTOS
// ============================================================

export async function getOrcamentos() {
  return request('/orcamentos')
}

export async function criarOrcamento(dados) {
  return request('/orcamentos', {
    method: 'POST',
    body: JSON.stringify(dados),
  })
}

export async function deletarOrcamento(orcamentoId) {
  return request(`/orcamentos/${orcamentoId}`, {
    method: 'DELETE',
  })
}


// ============================================================
// METAS
// ============================================================

export async function getMetas() {
  return request('/metas')
}

export async function criarMeta(nome, valorAlvo) {
  return request('/metas', {
    method: 'POST',
    body: JSON.stringify({
      nome,
      valor_alvo: valorAlvo,
    }),
  })
}

export async function contribuirMeta(metaId, valor) {
  return request(`/metas/${metaId}/contribuir`, {
    method: 'POST',
    body: JSON.stringify({ valor }),
  })
}

export async function deletarMeta(metaId) {
  return request(`/metas/${metaId}`, {
    method: 'DELETE',
  })
}


// ============================================================
// CONTAS FIXAS
// ============================================================

export async function getContasFixas() {
  return request('/contas-fixas')
}

export async function criarContaFixa(dados) {
  return request('/contas-fixas', {
    method: 'POST',
    body: JSON.stringify(dados),
  })
}

export async function pagarContaFixa(contaFixaId) {
  return request(`/contas-fixas/${contaFixaId}/pagar`, {
    method: 'POST',
  })
}

export async function desativarContaFixa(contaFixaId) {
  return request(`/contas-fixas/${contaFixaId}`, {
    method: 'DELETE',
  })
}


// ============================================================
// DÍVIDAS
// ============================================================

export async function getDividas() {
  return request('/dividas')
}

export async function criarDivida(dados) {
  return request('/dividas', {
    method: 'POST',
    body: JSON.stringify(dados),
  })
}

export async function pagarParcelaDivida(dividaId) {
  return request(`/dividas/${dividaId}/pagar-parcela`, {
    method: 'POST',
  })
}

export async function deletarDivida(dividaId) {
  return request(`/dividas/${dividaId}`, {
    method: 'DELETE',
  })
}


// ============================================================
// CARTÕES
// ============================================================

export async function getCartoes() {
  return request('/cartoes')
}

export async function criarCartao(dados) {
  return request('/cartoes', {
    method: 'POST',
    body: JSON.stringify(dados),
  })
}

export async function deletarCartao(cartaoId) {
  return request(`/cartoes/${cartaoId}`, {
    method: 'DELETE',
  })
}


// ============================================================
// COMPRAS NO CARTÃO
// ============================================================

export async function criarCompraCartao(dados) {
  return request('/compras-cartao', {
    method: 'POST',
    body: JSON.stringify(dados),
  })
}

export async function getFatura(cartaoId, mes, ano) {
  return request(
    `/cartoes/${cartaoId}/fatura?mes=${mes}&ano=${ano}`
  )
}

export async function pagarParcelaCartao(parcelaId) {
  return request(`/parcelas-cartao/${parcelaId}/pagar`, {
    method: 'POST',
  })
}

// ============================================================
// RELATÓRIOS
// ============================================================

export async function exportarRelatorioPdf(mes, ano) {
  const token = getToken()

  const resposta = await fetch(
    `${BASE_URL}/relatorios/pdf?mes=${mes}&ano=${ano}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )

  if (!resposta.ok) {
    let erro
    try {
      erro = await resposta.json()
    } catch {
      erro = { detail: 'Erro ao gerar o relatório PDF' }
    }

    if (resposta.status === 401) {
      localStorage.removeItem('access_token')
    }

    throw new Error(erro.detail || 'Erro ao gerar o relatório PDF')
  }

  const blob = await resposta.blob()
  const url = window.URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `relatorio-financas-${ano}-${String(mes).padStart(2, '0')}.pdf`
  document.body.appendChild(a)
  a.click()
  a.remove()
  window.URL.revokeObjectURL(url)
}