import { useEffect, useState } from 'react'

import {
  getCategorias,
  criarCategoria,
  getContas,
  criarConta,
  getTransacoes,
  criarTransacao,
  getOrcamentos,
  criarOrcamento,
  getMetas,
  criarMeta,
  contribuirMeta,
  getContasFixas,
  criarContaFixa,
  pagarContaFixa,
  desativarContaFixa,
  getDividas,
  criarDivida,
  pagarParcelaDivida,
  getCartoes,
  criarCartao,
  criarCompraCartao,
  deletarCategoria,
  deletarConta,
  deletarTransacao,
  deletarOrcamento,
  deletarMeta,
  deletarDivida,
  deletarCartao,
  login,
  cadastrarUsuario,
  getUsuarioAtual,
  logout,
  estaAutenticado,
} from './api'

import FormularioCategoria from './components/FormularioCategoria'
import ListaCategorias from './components/ListaCategorias'

import FormularioConta from './components/FormularioConta'
import ListaContas from './components/ListaContas'

import FormularioTransacao from './components/FormularioTransacao'
import ListaTransacoes from './components/ListaTransacoes'

import FormularioOrcamento from './components/FormularioOrcamento'
import ListaOrcamentos from './components/ListaOrcamentos'

import FormularioMeta from './components/FormularioMeta'
import ListaMetas from './components/ListaMetas'

import FormularioContaFixa from './components/FormularioContaFixa'
import ListaContasFixas from './components/ListaContasFixas'

import FormularioDivida from './components/FormularioDivida'
import ListaDividas from './components/ListaDividas'

import FormularioCartao from './components/FormularioCartao'
import ListaCartoes from './components/ListaCartoes'

import FormularioCompraCartao from './components/FormularioCompraCartao'
import ListaComprasCartao from './components/ListaComprasCartao'
import VisualizadorFatura from './components/VisualizadorFatura'

import FormularioLogin from './components/FormularioLogin'
import FormularioCadastro from './components/FormularioCadastro'

import Layout from './components/Layout'
import ModalFormulario from './components/ModalFormulario'

import './App.css'


function App() {
  const [autenticado, setAutenticado] = useState(estaAutenticado())
  const [usuario, setUsuario] = useState(null)
  const [mostrarCadastro, setMostrarCadastro] = useState(false)

  const [paginaAtual, setPaginaAtual] = useState('dashboard')

  const [categorias, setCategorias] = useState([])
  const [contas, setContas] = useState([])
  const [transacoes, setTransacoes] = useState([])
  const [orcamentos, setOrcamentos] = useState([])
  const [metas, setMetas] = useState([])
  const [contasFixas, setContasFixas] = useState([])
  const [dividas, setDividas] = useState([])
  const [cartoes, setCartoes] = useState([])
  const [comprasCartao, setComprasCartao] = useState([])
  const [modalAtual, setModalAtual] = useState(null)


  // ============================================================
  // AUTENTICAÇÃO
  // ============================================================

  async function handleLogin(email, senha) {
    await login(email, senha)

    const dadosUsuario = await getUsuarioAtual()

    setUsuario(dadosUsuario)
    setAutenticado(true)
    setMostrarCadastro(false)
  }


  async function handleCadastro(nome, email, senha) {
    await cadastrarUsuario(nome, email, senha)
    setMostrarCadastro(false)
  }


  function handleLogout() {
    logout()

    setUsuario(null)
    setAutenticado(false)
    setPaginaAtual('dashboard')
    setModalAtual(null)
  }


  // ============================================================
  // CARREGAMENTO INICIAL
  // ============================================================

  useEffect(() => {
    if (!autenticado) {
      return
    }

    async function inicializarAplicacao() {
      try {
        const dadosUsuario = await getUsuarioAtual()

        setUsuario(dadosUsuario)

        await Promise.all([
          carregarCategorias(),
          carregarContas(),
          carregarTransacoes(),
          carregarOrcamentos(),
          carregarMetas(),
          carregarContasFixas(),
          carregarDividas(),
          carregarCartoes(),
        ])
      } catch (e) {
        console.error('Erro ao inicializar aplicação:', e)

        logout()
        setUsuario(null)
        setAutenticado(false)
      }
    }

    inicializarAplicacao()
  }, [autenticado])


  // ============================================================
  // CATEGORIAS
  // ============================================================

  async function carregarCategorias() {
    try {
      setCategorias(await getCategorias())
    } catch (e) {
      console.error('Erro ao carregar categorias:', e)
    }
  }


  async function handleCriarCategoria(nome) {
    await criarCategoria(nome)
    await carregarCategorias()
  }


  async function handleDeletarCategoria(id) {
    try {
      await deletarCategoria(id)
      await carregarCategorias()
    } catch (e) {
      alert(e.message)
    }
  }


  // ============================================================
  // CONTAS
  // ============================================================

  async function carregarContas() {
    try {
      setContas(await getContas())
    } catch (e) {
      console.error('Erro ao carregar contas:', e)
    }
  }


  async function handleCriarConta(nome, saldoInicial) {
    await criarConta(nome, saldoInicial)
    await carregarContas()
  }


  async function handleDeletarConta(id) {
    try {
      await deletarConta(id)
      await carregarContas()
    } catch (e) {
      alert(e.message)
    }
  }


  // ============================================================
  // TRANSAÇÕES
  // ============================================================

  async function carregarTransacoes() {
    try {
      setTransacoes(await getTransacoes())
    } catch (e) {
      console.error('Erro ao carregar transações:', e)
    }
  }


  async function handleCriarTransacao(dados) {
    await criarTransacao(dados)
    await carregarTransacoes()
    fecharModal()
  }


  async function handleDeletarTransacao(id) {
    try {
      await deletarTransacao(id)
      await carregarTransacoes()
    } catch (e) {
      alert(e.message)
    }
  }


  function abrirModal(tipo) {
    setModalAtual(tipo)
  }


  function fecharModal() {
    setModalAtual(null)
  }


  useEffect(() => {
    function handleTeclaEscape(evento) {
      if (evento.key === 'Escape') {
        fecharModal()
      }
    }

    if (modalAtual) {
      document.addEventListener('keydown', handleTeclaEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleTeclaEscape)
    }
  }, [modalAtual])


  // ============================================================
  // ORÇAMENTOS
  // ============================================================

  async function carregarOrcamentos() {
    try {
      setOrcamentos(await getOrcamentos())
    } catch (e) {
      console.error('Erro ao carregar orçamentos:', e)
    }
  }


  async function handleCriarOrcamento(dados) {
    await criarOrcamento(dados)
    await carregarOrcamentos()
  }


  async function handleDeletarOrcamento(id) {
    try {
      await deletarOrcamento(id)
      await carregarOrcamentos()
    } catch (e) {
      alert(e.message)
    }
  }


  // ============================================================
  // METAS
  // ============================================================

  async function carregarMetas() {
    try {
      setMetas(await getMetas())
    } catch (e) {
      console.error('Erro ao carregar metas:', e)
    }
  }


  async function handleCriarMeta(nome, valorAlvo) {
    await criarMeta(nome, valorAlvo)
    await carregarMetas()
  }


  async function handleContribuirMeta(metaId, valor) {
    await contribuirMeta(metaId, valor)
    await carregarMetas()
  }


  async function handleDeletarMeta(id) {
    try {
      await deletarMeta(id)
      await carregarMetas()
    } catch (e) {
      alert(e.message)
    }
  }


  // ============================================================
  // CONTAS FIXAS
  // ============================================================

  async function carregarContasFixas() {
    try {
      setContasFixas(await getContasFixas())
    } catch (e) {
      console.error('Erro ao carregar contas fixas:', e)
    }
  }


  async function handleCriarContaFixa(dados) {
    await criarContaFixa(dados)
    await carregarContasFixas()
  }


  async function handlePagarContaFixa(id) {
    await pagarContaFixa(id)

    await carregarContasFixas()
    await carregarTransacoes()
  }


  async function handleDesativarContaFixa(id) {
    await desativarContaFixa(id)
    await carregarContasFixas()
  }


  // ============================================================
  // DÍVIDAS
  // ============================================================

  async function carregarDividas() {
    try {
      setDividas(await getDividas())
    } catch (e) {
      console.error('Erro ao carregar dívidas:', e)
    }
  }


  async function handleCriarDivida(dados) {
    await criarDivida(dados)
    await carregarDividas()
  }


  async function handlePagarParcelaDivida(id) {
    await pagarParcelaDivida(id)

    await carregarDividas()
    await carregarTransacoes()
  }


  async function handleDeletarDivida(id) {
    try {
      await deletarDivida(id)
      await carregarDividas()
    } catch (e) {
      alert(e.message)
    }
  }


  // ============================================================
  // CARTÕES
  // ============================================================

  async function carregarCartoes() {
    try {
      setCartoes(await getCartoes())
    } catch (e) {
      console.error('Erro ao carregar cartões:', e)
    }
  }


  async function handleCriarCartao(dados) {
    await criarCartao(dados)
    await carregarCartoes()
  }


  async function handleDeletarCartao(id) {
    try {
      await deletarCartao(id)
      await carregarCartoes()
    } catch (e) {
      alert(e.message)
    }
  }


  // ============================================================
  // COMPRAS NO CARTÃO
  // ============================================================

  async function handleCriarCompraCartao(dados) {
    const novaCompra = await criarCompraCartao(dados)

    setComprasCartao((comprasAnteriores) => [
      ...comprasAnteriores,
      novaCompra,
    ])
  }


  // ============================================================
  // DASHBOARD
  // ============================================================

  function calcularReceitas() {
    return transacoes
      .filter((transacao) => transacao.tipo === 'entrada')
      .reduce(
        (total, transacao) =>
          total + Number(transacao.valor || 0),
        0
      )
  }


  function calcularDespesas() {
    return transacoes
      .filter((transacao) => transacao.tipo === 'saida')
      .reduce(
        (total, transacao) =>
          total + Number(transacao.valor || 0),
        0
      )
  }


  function calcularSaldo() {
    return calcularReceitas() - calcularDespesas()
  }


  function formatarMoeda(valor) {
    return Number(valor || 0).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
  }


  // ============================================================
  // CONTEÚDO DAS PÁGINAS
  // ============================================================

  function renderPagina() {
    switch (paginaAtual) {

      case 'dashboard':
        return (
          <div className="pagina">

            <div className="pagina-cabecalho">
              <div>
                <span className="pagina-kicker">
                  VISÃO GERAL
                </span>

                <h1>Dashboard</h1>

                <p>
                  Bem-vindo ao FinanDog. Seu dinheiro, organizado do seu jeito.
                </p>
              </div>
            </div>


            <div className="dashboard-cards">

              <div className="dashboard-card dashboard-card-entrada">
                <span>Entradas</span>

                <strong>
                  {formatarMoeda(calcularReceitas())}
                </strong>

                <small>
                  Total registrado
                </small>
              </div>


              <div className="dashboard-card dashboard-card-saida">
                <span>Saídas</span>

                <strong>
                  {formatarMoeda(calcularDespesas())}
                </strong>

                <small>
                  Total registrado
                </small>
              </div>


              <div className="dashboard-card dashboard-card-saldo">
                <span>Saldo</span>

                <strong>
                  {formatarMoeda(calcularSaldo())}
                </strong>

                <small>
                  Entradas - saídas
                </small>
              </div>


              <div className="dashboard-card dashboard-card-meta">
                <span>Metas</span>

                <strong>
                  {metas.length}
                </strong>

                <small>
                  Metas cadastradas
                </small>
              </div>

            </div>


            <div className="dashboard-grid">

              <div className="painel">
                <div className="painel-cabecalho">
                  <div>
                    <span className="painel-kicker">
                      RESUMO
                    </span>

                    <h2>Contas</h2>
                  </div>

                  <span className="painel-contador">
                    {contas.length}
                  </span>
                </div>

                {contas.length === 0 ? (
                  <div className="estado-vazio">
                    <span>◎</span>
                    <p>Nenhuma conta cadastrada.</p>
                  </div>
                ) : (
                  <div className="lista-dashboard">
                    {contas.slice(0, 5).map((conta) => (
                      <div
                        className="item-dashboard"
                        key={conta.id}
                      >
                        <div>
                          <strong>{conta.nome}</strong>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>


              <div className="painel">
                <div className="painel-cabecalho">
                  <div>
                    <span className="painel-kicker">
                      ORGANIZAÇÃO
                    </span>

                    <h2>Categorias</h2>
                  </div>

                  <span className="painel-contador">
                    {categorias.length}
                  </span>
                </div>

                {categorias.length === 0 ? (
                  <div className="estado-vazio">
                    <span>◎</span>
                    <p>Nenhuma categoria cadastrada.</p>
                  </div>
                ) : (
                  <div className="tags-dashboard">
                    {categorias.slice(0, 8).map((categoria) => (
                      <span key={categoria.id}>
                        {categoria.nome}
                      </span>
                    ))}
                  </div>
                )}
              </div>

            </div>


            <div className="painel painel-transacoes">

              <div className="painel-cabecalho">
                <div>
                  <span className="painel-kicker">
                    ATIVIDADE
                  </span>

                  <h2>Transações recentes</h2>
                </div>

                <button
                  className="botao-secundario"
                  onClick={() => setPaginaAtual('transacoes')}
                >
                  Ver todas
                </button>
              </div>


              {transacoes.length === 0 ? (
                <div className="estado-vazio">
                  <span>◎</span>

                  <p>
                    Nenhuma transação registrada.
                  </p>

                  <button
                    type="button"
                    className="botao-principal botao-vazio-acao"
                    onClick={() => abrirModal('transacao')}
                  >
                    + Nova transação
                  </button>
                </div>
              ) : (
                <div className="lista-dashboard">

                  {transacoes
                    .slice(-5)
                    .reverse()
                    .map((transacao) => (
                      <div
                        className="item-dashboard item-transacao"
                        key={transacao.id}
                      >
                        <div>
                          <strong>
                            {transacao.descricao || 'Transação'}
                          </strong>

                          <small>
                            {transacao.tipo}
                          </small>
                        </div>

                        <strong>
                          {formatarMoeda(transacao.valor)}
                        </strong>
                      </div>
                    ))}

                </div>
              )}

            </div>

          </div>
        )


      case 'categorias':
        return (
          <div className="pagina">

            <div className="pagina-cabecalho">
              <div>
                <span className="pagina-kicker">
                  ORGANIZAÇÃO
                </span>

                <h1>Categorias</h1>

                <p>
                  Organize suas receitas e despesas.
                </p>
              </div>
            </div>

            <div className="conteudo-duas-colunas">

              <div className="painel">
                <div className="painel-cabecalho">
                  <div>
                    <h2>Nova categoria</h2>
                  </div>
                </div>

                <FormularioCategoria
                  aoCriar={handleCriarCategoria}
                />
              </div>

              <div className="painel">
                <div className="painel-cabecalho">
                  <div>
                    <h2>Categorias cadastradas</h2>
                  </div>

                  <span className="painel-contador">
                    {categorias.length}
                  </span>
                </div>

                <ListaCategorias
                  categorias={categorias}
                  aoDeletar={handleDeletarCategoria}
                />
              </div>

            </div>

          </div>
        )


      case 'contas':
        return (
          <div className="pagina">

            <div className="pagina-cabecalho">
              <div>
                <span className="pagina-kicker">
                  PATRIMÔNIO
                </span>

                <h1>Contas</h1>

                <p>
                  Gerencie suas contas e saldos.
                </p>
              </div>
            </div>

            <div className="conteudo-duas-colunas">

              <div className="painel">
                <h2>Nova conta</h2>

                <FormularioConta
                  aoCriar={handleCriarConta}
                />
              </div>

              <div className="painel">
                <div className="painel-cabecalho">
                  <h2>Suas contas</h2>

                  <span className="painel-contador">
                    {contas.length}
                  </span>
                </div>

                <ListaContas
                  contas={contas}
                  aoDeletar={handleDeletarConta}
                />
              </div>

            </div>

          </div>
        )


      case 'transacoes':
        return (
          <div className="pagina">
            <div className="pagina-cabecalho pagina-cabecalho-acoes">
              <div>
                <span className="pagina-kicker">
                  MOVIMENTAÇÕES
                </span>

                <h1>Transações</h1>

                <p>
                  Registre e acompanhe suas movimentações.
                </p>
              </div>

              <button
                type="button"
                className="botao-principal botao-acao-pagina"
                onClick={() => abrirModal('transacao')}
              >
                <span>+</span>
                Nova transação
              </button>
            </div>

            <div className="painel painel-historico">
              <div className="painel-cabecalho">
                <div>
                  <span className="painel-kicker">
                    HISTÓRICO
                  </span>

                  <h2>Todas as transações</h2>
                </div>

                <span className="painel-contador">
                  {transacoes.length}
                </span>
              </div>

              <ListaTransacoes
                transacoes={transacoes}
                aoDeletar={handleDeletarTransacao}
              />
            </div>
          </div>
        )


      case 'orcamentos':
        return (
          <div className="pagina">
            <div className="pagina-cabecalho pagina-cabecalho-acoes">
              <div>
                <span className="pagina-kicker">
                  PLANEJAMENTO
                </span>

                <h1>Orçamentos</h1>

                <p>
                  Controle quanto pretende gastar em cada categoria.
                </p>
              </div>

              <button
                type="button"
                className="botao-principal botao-acao-pagina"
                onClick={() => abrirModal('orcamento')}
              >
                <span>+</span>
                Novo orçamento
              </button>
            </div>

            <div className="painel painel-historico">
              <div className="painel-cabecalho">
                <div>
                  <span className="painel-kicker">
                    PLANEJAMENTO
                  </span>

                  <h2>Seus orçamentos</h2>
                </div>

                <span className="painel-contador">
                  {orcamentos.length}
                </span>
              </div>

              <ListaOrcamentos
                orcamentos={orcamentos}
                aoDeletar={handleDeletarOrcamento}
              />
            </div>
          </div>
        )


      case 'metas':
        return (
          <div className="pagina">
            <div className="pagina-cabecalho pagina-cabecalho-acoes">
              <div>
                <span className="pagina-kicker">
                  PLANEJAMENTO
                </span>

                <h1>Metas</h1>

                <p>
                  Acompanhe seus objetivos financeiros.
                </p>
              </div>

              <button
                type="button"
                className="botao-principal botao-acao-pagina"
                onClick={() => abrirModal('meta')}
              >
                <span>+</span>
                Nova meta
              </button>
            </div>

            <div className="painel painel-historico">
              <div className="painel-cabecalho">
                <div>
                  <span className="painel-kicker">
                    OBJETIVOS
                  </span>

                  <h2>Suas metas</h2>
                </div>

                <span className="painel-contador">
                  {metas.length}
                </span>
              </div>

              <ListaMetas
                metas={metas}
                aoContribuir={handleContribuirMeta}
                aoDeletar={handleDeletarMeta}
              />
            </div>
          </div>
        )


      case 'contas-fixas':
        return (
          <div className="pagina">
            <div className="pagina-cabecalho pagina-cabecalho-acoes">
              <div>
                <span className="pagina-kicker">
                  RECORRÊNCIAS
                </span>

                <h1>Contas Fixas</h1>

                <p>
                  Acompanhe suas despesas recorrentes.
                </p>
              </div>

              <button
                type="button"
                className="botao-principal botao-acao-pagina"
                onClick={() => abrirModal('conta-fixa')}
              >
                <span>+</span>
                Nova conta fixa
              </button>
            </div>

            <div className="painel painel-historico">
              <div className="painel-cabecalho">
                <div>
                  <span className="painel-kicker">
                    RECORRÊNCIAS
                  </span>

                  <h2>Suas contas fixas</h2>
                </div>

                <span className="painel-contador">
                  {contasFixas.length}
                </span>
              </div>

              <ListaContasFixas
                contasFixas={contasFixas}
                aoPagar={handlePagarContaFixa}
                aoDesativar={handleDesativarContaFixa}
              />
            </div>
          </div>
        )


      case 'dividas':
        return (
          <div className="pagina">
            <div className="pagina-cabecalho pagina-cabecalho-acoes">
              <div>
                <span className="pagina-kicker">
                  COMPROMISSOS
                </span>

                <h1>Dívidas</h1>

                <p>
                  Controle parcelas e compromissos financeiros.
                </p>
              </div>

              <button
                type="button"
                className="botao-principal botao-acao-pagina"
                onClick={() => abrirModal('divida')}
              >
                <span>+</span>
                Nova dívida
              </button>
            </div>

            <div className="painel painel-historico">
              <div className="painel-cabecalho">
                <div>
                  <span className="painel-kicker">
                    COMPROMISSOS
                  </span>

                  <h2>Suas dívidas</h2>
                </div>

                <span className="painel-contador">
                  {dividas.length}
                </span>
              </div>

              <ListaDividas
                dividas={dividas}
                aoPagarParcela={handlePagarParcelaDivida}
                aoDeletar={handleDeletarDivida}
              />
            </div>
          </div>
        )


      case 'cartoes':
        return (
          <div className="pagina">
            <div className="pagina-cabecalho pagina-cabecalho-acoes">
              <div>
                <span className="pagina-kicker">
                  CRÉDITO
                </span>

                <h1>Cartões</h1>

                <p>
                  Gerencie seus cartões e acompanhe suas compras.
                </p>
              </div>

              <button
                type="button"
                className="botao-principal botao-acao-pagina"
                onClick={() => abrirModal('cartao')}
              >
                <span>+</span>
                Novo cartão
              </button>
            </div>

            <div className="painel painel-historico">
              <div className="painel-cabecalho">
                <div>
                  <span className="painel-kicker">
                    SEUS CARTÕES
                  </span>

                  <h2>Cartões cadastrados</h2>
                </div>

                <span className="painel-contador">
                  {cartoes.length}
                </span>
              </div>

              <ListaCartoes
                cartoes={cartoes}
                aoDeletar={handleDeletarCartao}
              />
            </div>

            <div className="painel">
              <div className="painel-cabecalho">
                <div>
                  <span className="painel-kicker">
                    MOVIMENTAÇÃO
                  </span>

                  <h2>Compras</h2>
                </div>

                <button
                  type="button"
                  className="botao-secundario"
                  onClick={() => abrirModal('compra-cartao')}
                >
                  + Nova compra
                </button>
              </div>

              <ListaComprasCartao
                compras={comprasCartao}
              />
            </div>

            <div className="painel">
              <div className="painel-cabecalho">
                <div>
                  <span className="painel-kicker">
                    CONSULTA
                  </span>

                  <h2>Fatura</h2>
                </div>
              </div>

              <VisualizadorFatura
                cartoes={cartoes}
              />
            </div>
          </div>
        )


      default:
        return null
    }
  }


  // ============================================================
  // LOGIN / CADASTRO
  // ============================================================

  if (!autenticado) {

    if (mostrarCadastro) {
      return (
        <div className="auth-container">

          <FormularioCadastro
            aoCadastrar={handleCadastro}
            aoVoltar={() => setMostrarCadastro(false)}
          />

        </div>
      )
    }


    return (
      <div className="auth-container">

        <FormularioLogin
          aoEntrar={handleLogin}
          aoIrParaCadastro={() => setMostrarCadastro(true)}
        />

      </div>
    )
  }


  // ============================================================
  // APLICAÇÃO
  // ============================================================

  return (
    <>
      <Layout
        usuario={usuario}
        paginaAtual={paginaAtual}
        aoMudarPagina={setPaginaAtual}
        aoSair={handleLogout}
      >
        {renderPagina()}
      </Layout>

      <ModalFormulario
        aberto={modalAtual === 'transacao'}
        kicker="MOVIMENTAÇÃO"
        titulo="Nova transação"
        descricao="Registre uma nova entrada ou saída."
        tituloId="modal-transacao-titulo"
        aoFechar={fecharModal}
      >
        <FormularioTransacao
          aoCriar={handleCriarTransacao}
          aoCancelar={fecharModal}
          contas={contas}
          categorias={categorias}
        />
      </ModalFormulario>

      <ModalFormulario
        aberto={modalAtual === 'orcamento'}
        kicker="PLANEJAMENTO"
        titulo="Novo orçamento"
        descricao="Defina um limite para seus gastos."
        tituloId="modal-orcamento-titulo"
        aoFechar={fecharModal}
      >
        <FormularioOrcamento
          aoCriar={async (dados) => {
            await handleCriarOrcamento(dados)
            fecharModal()
          }}
          aoCancelar={fecharModal}
          categorias={categorias}
        />
      </ModalFormulario>

      <ModalFormulario
        aberto={modalAtual === 'meta'}
        kicker="OBJETIVO"
        titulo="Nova meta"
        descricao="Crie um novo objetivo financeiro."
        tituloId="modal-meta-titulo"
        aoFechar={fecharModal}
      >
        <FormularioMeta
          aoCriar={async (nome, valor) => {
            await handleCriarMeta(nome, valor)
            fecharModal()
          }}
          aoCancelar={fecharModal}
        />
      </ModalFormulario>

      <ModalFormulario
        aberto={modalAtual === 'conta-fixa'}
        kicker="RECORRÊNCIA"
        titulo="Nova conta fixa"
        descricao="Cadastre uma nova despesa recorrente."
        tituloId="modal-conta-fixa-titulo"
        aoFechar={fecharModal}
      >
        <FormularioContaFixa
          aoCriar={async (dados) => {
            await handleCriarContaFixa(dados)
            fecharModal()
          }}
          aoCancelar={fecharModal}
          contas={contas}
          categorias={categorias}
        />
      </ModalFormulario>

      <ModalFormulario
        aberto={modalAtual === 'divida'}
        kicker="COMPROMISSO"
        titulo="Nova dívida"
        descricao="Cadastre uma nova dívida parcelada."
        tituloId="modal-divida-titulo"
        aoFechar={fecharModal}
      >
        <FormularioDivida
          aoCriar={async (dados) => {
            await handleCriarDivida(dados)
            fecharModal()
          }}
          aoCancelar={fecharModal}
          contas={contas}
          categorias={categorias}
        />
      </ModalFormulario>

      <ModalFormulario
        aberto={modalAtual === 'cartao'}
        kicker="CRÉDITO"
        titulo="Novo cartão"
        descricao="Cadastre um novo cartão de crédito."
        tituloId="modal-cartao-titulo"
        aoFechar={fecharModal}
      >
        <FormularioCartao
          aoCriar={async (dados) => {
            await handleCriarCartao(dados)
            fecharModal()
          }}
          aoCancelar={fecharModal}
        />
      </ModalFormulario>

      <ModalFormulario
        aberto={modalAtual === 'compra-cartao'}
        kicker="MOVIMENTAÇÃO"
        titulo="Nova compra"
        descricao="Registre uma nova compra no cartão."
        tituloId="modal-compra-cartao-titulo"
        aoFechar={fecharModal}
      >
        <FormularioCompraCartao
          aoCriar={async (dados) => {
            await handleCriarCompraCartao(dados)
            fecharModal()
          }}
          aoCancelar={fecharModal}
          cartoes={cartoes}
          categorias={categorias}
        />
      </ModalFormulario>
    </>
  )
}


export default App