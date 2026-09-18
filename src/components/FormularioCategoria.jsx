import { useState } from 'react'

function FormularioCategoria({ aoCriar }) {
  const [nome, setNome] = useState('')
  const [cor, setCor] = useState('#00e5ff')

  function handleSubmit(evento) {
    evento.preventDefault()
    if (!nome.trim()) return
    aoCriar(nome.trim(), cor)
    setNome('')
    setCor('#00e5ff')
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

      <div className="campo">
        <label htmlFor="categoria-cor">Cor</label>
        <div className="campo-cor">
          <input
            id="categoria-cor"
            type="color"
            value={cor}
            onChange={(evento) => setCor(evento.target.value)}
          />
          <span className="campo-cor-valor">{cor}</span>
        </div>
      </div>

      <button className="botao-principal" type="submit">
        Adicionar categoria
      </button>
    </form>
  )
}

export default FormularioCategoria
