import { useState } from 'react'

function FormularioCartao({ aoCriar }) {
  const [nome, setNome] = useState('')
  const [limite, setLimite] = useState('')
  const [diaFechamento, setDiaFechamento] = useState('')

  async function handleSubmit(evento) {
    evento.preventDefault()

    await aoCriar({
      nome: nome.trim(),
      limite: parseFloat(limite),
      dia_fechamento: parseInt(diaFechamento),
    })

    setNome('')
    setLimite('')
    setDiaFechamento('')
  }

  return (
    <form className="formulario-padrao" onSubmit={handleSubmit}>
      <div className="formulario-grid">
        <div className="campo campo-largo">
          <label htmlFor="cartao-nome">Nome do cartão</label>
          <input
            id="cartao-nome"
            type="text"
            value={nome}
            onChange={(evento) => setNome(evento.target.value)}
            placeholder="Ex.: Nubank"
            required
          />
        </div>

        <div className="campo">
          <label htmlFor="cartao-limite">Limite</label>
          <div className="campo-prefixo">
            <span>R$</span>
            <input
              id="cartao-limite"
              type="number"
              min="0"
              step="0.01"
              value={limite}
              onChange={(evento) => setLimite(evento.target.value)}
              placeholder="0,00"
              required
            />
          </div>
        </div>

        <div className="campo">
          <label htmlFor="cartao-fechamento">Dia de fechamento</label>
          <input
            id="cartao-fechamento"
            type="number"
            min="1"
            max="31"
            value={diaFechamento}
            onChange={(evento) => setDiaFechamento(evento.target.value)}
            placeholder="Ex.: 15"
            required
          />
        </div>
      </div>

      <button className="botao-principal" type="submit">
        Adicionar cartão
      </button>
    </form>
  )
}

export default FormularioCartao
