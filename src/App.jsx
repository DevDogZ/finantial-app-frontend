import { useState, useEffect } from 'react'
import {
  getCategorias, criarCategoria,
  getContas, criarConta,
  getTransacoes, criarTransacao,
  getOrcamentos, criarOrcamento,
} from './api'
import FormularioCategoria from './components/FormularioCategoria'
import ListaCategorias from './components/ListaCategorias'
import FormularioConta from './components/FormularioConta'
import ListaContas from './components/ListaContas'
import FormularioTransacao from './components/FormularioTransacao'
import ListaTransacoes from './components/ListaTransacoes'
import FormularioOrcamento from './components/ListaOrcamentos'
import ListaOrcamentos from './components/ListaOrcamentos'

import './App.css'

function App() {
  const [categorias, setCategorias] = useState([])
  const [contas, setContas] = useState([])
  const [transacoes, setTransacoes] = useState([])
  const [orcamentos, setOrcamentos] = useState([])

  useEffect(() => {
    carregarCategorias()
    carregarContas()
    carregarTransacoes()
    carregarOrcamentos()
  }, [])

  async function carregarCategorias() {
    setCategorias(await getCategorias())
  }

  async function carregarOrcamentos(){
    setOrcamentos(await getOrcamentos())
  }

  async function handleCriarOrcamento(dados){
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

  return (
    <div>
      <h1>Financas da Casa</h1>

      <h2>Categorias</h2>
      <FormularioCategoria aoCriar={handleCriarCategoria} />
      <ListaCategorias categorias={categorias} />

      <h2>Contas</h2>
      <FormularioConta aoCriar={handleCriarConta} />
      <ListaContas contas={contas} />

      <h2>Transacoes</h2>
      <FormularioTransacao
        aoCriar={handleCriarTransacao}
        contas={contas}
        categorias={categorias}
      />
      <ListaTransacoes transacoes={transacoes} />

      <h2>Orcamentos</h2>
      <FormularioOrcamento aoCriar={handleCriarOrcamento} categorias={categorias} />
      <ListaOrcamentos orcamentos={orcamentos} />
    </div>
  )
}

export default App