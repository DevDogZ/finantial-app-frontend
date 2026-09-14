import { useState } from 'react'

function FormularioCategoria({ aoCriar }) {
  const [nome, setNome] = useState('')

  function handleSubmit(evento) {
    evento.preventDefault()
    aoCriar(nome)
    setNome('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={nome}
        onChange={(evento) => setNome(evento.target.value)}
        placeholder="Nome da categoria"
      />
      <button type="submit">Adicionar</button>
    </form>
  )
}

export default FormularioCategoria