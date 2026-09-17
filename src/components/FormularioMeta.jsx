import { useState } from 'react'

function FormularioMeta({ aoCriar }) {
  const [nome, setNome] = useState('')
  const [valorAlvo, setValorAlvo] = useState('')

  function handleSubmit(evento) {
    evento.preventDefault()
    if (!nome.trim() || valorAlvo === '') return

    aoCriar(nome.trim(), parseFloat(valorAlvo))
    setNome('')
    setValorAlvo('')
  }

  return (
    <form className="formulario-padrao" onSubmit={handleSubmit}>
      <div className="formulario-grid">
        <div className="campo campo-largo">
          <label htmlFor="meta-nome">Nome da meta</label>
          <input
            id="meta-nome"
            type="text"
            value={nome}
            onChange={(evento) => setNome(evento.target.value)}
            placeholder="Ex.: Viagem, carro, reserva..."
            required
          />
        </div>

        <div className="campo">
          <label htmlFor="meta-valor">Valor alvo</label>
          <div className="campo-prefixo">
            <span>R$</span>
            <input
              id="meta-valor"
              type="number"
              min="0"
              step="0.01"
              value={valorAlvo}
              onChange={(evento) => setValorAlvo(evento.target.value)}
              placeholder="0,00"
              required
            />
          </div>
        </div>
      </div>

      <button className="botao-principal" type="submit">
        Criar meta
      </button>
    </form>
  )
}

export default FormularioMeta
