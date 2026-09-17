import { useState } from 'react'

function FormularioCategoria({ aoCriar }) {
  const [nome, setNome] = useState('')

  function handleSubmit(evento) {
    evento.preventDefault()
    if (!nome.trim()) return

    aoCriar(nome.trim())
    setNome('')
  }

  return (
    <form className="formulario-padrao" onSubmit={handleSubmit}>
      <div className="campo">
        <label htmlFor="categoria-nome">Nome da categoria</label>
        <input
          id="categoria-nome"
          type="text"
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          placeholder="Ex.: Alimentação"
          required
        />
      </div>

      <button className="botao-principal" type="submit">
        Adicionar categoria
      </button>
    </form>
  )
}

export default FormularioCategoria
