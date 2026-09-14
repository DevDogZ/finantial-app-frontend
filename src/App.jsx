import { useState, useEffect } from 'react'
import { getCategorias, criarCategoria, getContas, criarConta } from './api'
import FormularioCategoria from './components/FormularioCategoria'
import ListaCategorias from './components/ListaCategorias'
import FormularioConta from './components/FormularioConta'
import ListaContas from './components/ListaContas'
import './App.css'

function App() {
  const [categorias, setCategorias] = useState([])
  const [contas, setContas] = useState([])

  useEffect(() => {
    carregarCategorias()
    carregarContas()
  }, [])

  async function carregarCategorias() {
    const dados = await getCategorias()
    setCategorias(dados)
  }

  async function carregarContas(){
    const dados = await getContas()
    setContas(dados)
  }

  async function handleCriarCategoria(nome) {
    await criarCategoria(nome)
    carregarCategorias()  
  }

  async function handleCriarConta(nome, saldoInicial) {
    await criarConta(nome, saldoInicial)
    carregarContas()
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
    </div>
  )
}

export default App