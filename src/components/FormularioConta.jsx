import { useState } from 'react'

function FormularioConta({ aoCriar }) {
  const [nome, setNome] = useState('')
  const [saldoInicial, setSaldoInicial] = useState('')

  function handleSubmit(evento) {
    evento.preventDefault()
    if (!nome.trim() || saldoInicial === '') return

    aoCriar(nome.trim(), parseFloat(saldoInicial))
    setNome('')
    setSaldoInicial('')
  }

  return (
    <form className="formulario-padrao" onSubmit={handleSubmit}>
      <div className="campo">
        <label htmlFor="conta-nome">Nome da conta</label>
        <input
          id="conta-nome"
          type="text"
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          placeholder="Ex.: Conta corrente"
          required
        />
      </div>

      <div className="campo">
        <label htmlFor="conta-saldo">Saldo inicial</label>
        <div className="campo-prefixo">
          <span>R$</span>
          <input
            id="conta-saldo"
            type="number"
            step="0.01"
            value={saldoInicial}
            onChange={(evento) => setSaldoInicial(evento.target.value)}
            placeholder="0,00"
            required
          />
        </div>
      </div>

      <button className="botao-principal" type="submit">
        Adicionar conta
      </button>
    </form>
  )
}

export default FormularioConta
