import { useState, useEffect } from 'react'
import {
  getCategorias, criarCategoria,
  getContas, criarConta,
  getTransacoes, criarTransacao,
  getOrcamentos, criarOrcamento,
  getMetas, criarMeta, contribuirMeta,
  getContasFixas, criarContaFixa,
  pagarContaFixa, desativarContaFixa,
  getDividas, criarDivida, pagarParcelaDivida,
  getCartoes, criarCartao, criarCompraCartao,
  deletarCategoria, deletarConta, deletarTransacao,
  deletarOrcamento, deletarMeta, deletarDivida, deletarCartao, login,
  cadastrarUsuario, getUsuarioAtual, logout, estaAutenticado,
} from './api'
import FormularioCategoria from './components/FormularioCategoria'
import ListaCategorias from './components/ListaCategorias'
import FormularioConta from './components/FormularioConta'
import ListaContas from './components/ListaContas'
import FormularioTransacao from './components/FormularioTransacao'
import ListaTransacoes from './components/ListaTransacoes'
import FormularioOrcamento from './components/FormularioOrcamento'
import ListaOrcamentos from './components/ListaOrcamentos'
import ListaMetas from './components/ListaMetas'
import FormularioContaFixa from './components/FormularioContaFixa'
import ListaContasFixas from './components/ListaContasFixas'
import FormularioDivida from './components/FormularioDivida'
import ListaDividas from './components/ListaDividas'
import FormularioCompraCartao from './components/FormularioCompraCartao'
import ListaComprasCartao from './components/ListaComprasCartao'
import VisualizadorFatura from './components/VisualizadorFatura'
import FormularioCartao from './components/FormularioCartao'
import ListaCartoes from './components/ListaCartoes'
import FormularioLogin from './components/FormularioLogin'
import FormularioCadastro from './components/FormularioCadastro'

import './App.css'
import FormularioMeta from './components/FormularioMeta'

function App() {
  const [autenticado, setAutenticado] = useState(estaAutenticado())
  const [usuario, setUsuario] = useState(null)
  const [mostrarCadastro, setMostrarCadastro] = useState(false)
  const [categorias, setCategorias] = useState([])
  const [contas, setContas] = useState([])
  const [transacoes, setTransacoes] = useState([])
  const [orcamentos, setOrcamentos] = useState([])
  const [metas, setMetas] = useState([])
  const [contasFixas, setContasFixas] = useState([])
  const [dividas, setDividas] = useState([])
  const [cartoes, setCartoes] = useState([])
  const [comprasCartao, setComprasCartao] = useState([])

  useEffect(() => {
    if (!autenticado) {
      return
    }

    async function carregarUsuario() {
      try {
        const dados = await getUsuarioAtual()
        setUsuario(dados)
      } catch {
        logout()
        setAutenticado(false)
        return
      }
    }

    carregarUsuario()

    carregarCategorias()
    carregarContas()
    carregarTransacoes()
    carregarOrcamentos()
    carregarMetas()
    carregarContasFixas()
    carregarDividas()
    carregarCartoes()
  }, [autenticado])



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
  }

  async function carregarCartoes() {
    setCartoes(await getCartoes())
  }

  async function handleCriarCartao(dados) {
    await criarCartao(dados)
    carregarCartoes()
  }

  async function handleCriarCompraCartao(dados) {
    const novaCompra = await criarCompraCartao(dados)
    setComprasCartao([...comprasCartao, novaCompra])
  }

  async function handleDeletarCategoria(id) {
    try {
      await deletarCategoria(id)
      carregarCategorias()
    } catch (e) {
      alert(e.message)
    }
  }

  async function handleDeletarConta(id) {
    try {
      await deletarConta(id)
      carregarContas()
    } catch (e) {
      alert(e.message)
    }
  }

  async function handleDeletarTransacao(id) {
    await deletarTransacao(id)
    carregarTransacoes()
  }

  async function handleDeletarOrcamento(id) {
    await deletarOrcamento(id)
    carregarOrcamentos()
  }

  async function handleDeletarMeta(id) {
    await deletarMeta(id)
    carregarMetas()
  }

  async function handleDeletarDivida(id) {
    await deletarDivida(id)
    carregarDividas()
  }

  async function handleDeletarCartao(id) {
    try {
      await deletarCartao(id)
      carregarCartoes()
    } catch (e) {
      alert(e.message)
    }
  }

  async function carregarDividas() {
    setDividas(await getDividas())
  }

  async function handleCriarDivida(dados) {
    await criarDivida(dados)
    carregarDividas()
  }

  async function handlePagarParcelaDivida(id) {
    await pagarParcelaDivida(id)
    carregarDividas()
    carregarTransacoes()
  }

  async function carregarContasFixas() {
    setContasFixas(await getContasFixas())
  }

  async function handleCriarContaFixa(dados) {
    await criarContaFixa(dados)
    carregarContasFixas()
  }

  async function handlePagarContaFixa(id) {
    await pagarContaFixa(id)
    carregarTransacoes()
  }

  async function handleDesativarContaFixa(id) {
    await desativarContaFixa(id)
    carregarContasFixas()
  }

  async function carregarMetas() {
    setMetas(await getMetas())
  }

  async function handleCriarMeta(nome, valorAlvo) {
    await criarMeta(nome, valorAlvo)
    carregarMetas()
  }

  async function handleContribuirMeta(metaId, valor) {
    await contribuirMeta(metaId, valor)
    carregarMetas()
  }

  async function carregarCategorias() {
    setCategorias(await getCategorias())
  }

  async function carregarOrcamentos() {
    setOrcamentos(await getOrcamentos())
  }

  async function handleCriarOrcamento(dados) {
    await criarOrcamento(dados)
    carregarOrcamentos()
  }

  async function carregarContas() {
    setContas(await getContas())
  }

  async function carregarTransacoes() {
    setTransacoes(await getTransacoes())
  }

  async function handleCriarCategoria(nome) {
    await criarCategoria(nome)
    carregarCategorias()
  }

  async function handleCriarConta(nome, saldoInicial) {
    await criarConta(nome, saldoInicial)
    carregarContas()
  }

  async function handleCriarTransacao(dados) {
    await criarTransacao(dados)
    carregarTransacoes()
  }

  if (!autenticado) {
    if (mostrarCadastro) {
      return (
        <div className="app">
          <FormularioCadastro
            aoCadastrar={handleCadastro}
            aoVoltar={() => setMostrarCadastro(false)}
          />
        </div>
      )
    }

    return (
      <div className="app">
        <FormularioLogin
          aoEntrar={handleLogin}
          aoIrParaCadastro={() => setMostrarCadastro(true)}
        />
      </div>
    )
  }

  return (
    <div className="app">
      <div>
        <h1 className="app-titulo">Financas da Casa</h1>

        {usuario && (
          <div>
            <span>
              Olá, {usuario.nome}!
            </span>

            <button onClick={handleLogout}>
              Sair
            </button>
          </div>
        )}
      </div>

      <section className="card">
        <h2>Categorias</h2>
        <FormularioCategoria aoCriar={handleCriarCategoria} />
        <ListaCategorias categorias={categorias} aoDeletar={handleDeletarCategoria} />
      </section>

      <section className="card">
        <h2>Contas</h2>
        <FormularioConta aoCriar={handleCriarConta} />
        <ListaContas contas={contas} aoDeletar={handleDeletarConta} />
      </section>

      <section className="card">
        <h2>Transacoes</h2>
        <FormularioTransacao aoCriar={handleCriarTransacao} contas={contas} categorias={categorias} />
        <ListaTransacoes transacoes={transacoes} aoDeletar={handleDeletarTransacao} />
      </section>

      <section className="card">
        <h2>Orcamentos</h2>
        <FormularioOrcamento aoCriar={handleCriarOrcamento} categorias={categorias} />
        <ListaOrcamentos orcamentos={orcamentos} aoDeletar={handleDeletarOrcamento} />
      </section>

      <section className="card">
        <h2>Metas</h2>
        <FormularioMeta aoCriar={handleCriarMeta} />
        <ListaMetas metas={metas} aoContribuir={handleContribuirMeta} aoDeletar={handleDeletarMeta} />
      </section>

      <section className="card">
        <h2>Contas Fixas</h2>
        <FormularioContaFixa aoCriar={handleCriarContaFixa} contas={contas} categorias={categorias} />
        <ListaContasFixas contasFixas={contasFixas} aoPagar={handlePagarContaFixa} aoDesativar={handleDesativarContaFixa} />
      </section>

      <section className="card">
        <h2>Dividas</h2>
        <FormularioDivida aoCriar={handleCriarDivida} contas={contas} categorias={categorias} />
        <ListaDividas dividas={dividas} aoPagarParcela={handlePagarParcelaDivida} aoDeletar={handleDeletarDivida} />
      </section>

      <section className="card">
        <h2>Cartoes de Credito</h2>
        <FormularioCartao aoCriar={handleCriarCartao} />
        <ListaCartoes cartoes={cartoes} aoDeletar={handleDeletarCartao} />
        <h3>Nova compra</h3>
        <FormularioCompraCartao aoCriar={handleCriarCompraCartao} cartoes={cartoes} categorias={categorias} />
        <h3>Compras registradas</h3>
        <ListaComprasCartao compras={comprasCartao} />
        <h3>Consultar fatura</h3>
        <VisualizadorFatura cartoes={cartoes} />
      </section>
    </div>
  )
}

export default App