import { useState, useEffect } from 'react'
import { getCategorias, criarCategoria } from './api'
import FormularioCategoria from './components/FormularioCategoria'
import ListaCategorias from './components/ListaCategorias'
import './App.css'

function App() {
  const [categorias, setCategorias] = useState([])

  useEffect(() => {
    carregarCategorias()
  }, [])

  async function carregarCategorias() {
    const dados = await getCategorias()
    setCategorias(dados)
  }

  async function handleCriar(nome) {
    await criarCategoria(nome)
    carregarCategorias()
  }

  return (
    <div>
      <h1>Financas da Casa</h1>
      <FormularioCategoria aoCriar={handleCriar} />
      <h2>Categorias</h2>
      <ListaCategorias categorias={categorias} />
    </div>
  )
}

export default App