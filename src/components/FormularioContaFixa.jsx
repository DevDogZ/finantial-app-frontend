import { useState } from 'react'

function FormularioContaFixa({ aoCriar, contas, categorias }) {
  const [nome, setNome] = useState('')
  const [valor, setValor] = useState('')
  const [diaVencimento, setDiaVencimento] = useState('')
  const [contaId, setContaId] = useState('')
  const [categoriaId, setCategoriaId] = useState('')
  const [erro, setErro] = useState('')

  async function handleSubmit(evento) {
    evento.preventDefault()
    setErro('')

    try {
      await aoCriar({
        nome: nome.trim(),
        valor: parseFloat(valor),
        dia_vencimento: parseInt(diaVencimento),
        conta_id: parseInt(contaId),
        categoria_id: parseInt(categoriaId),
      })

      setNome('')
      setValor('')
      setDiaVencimento('')
      setContaId('')
      setCategoriaId('')
    } catch (e) {
      setErro(e.message)
    }
  }

  return (
    <form className="formulario-padrao" onSubmit={handleSubmit}>
      <div className="formulario-grid">
        <div className="campo campo-largo">
          <label htmlFor="fixa-nome">Nome</label>
          <input
            id="fixa-nome"
            type="text"
            value={nome}
            onChange={(evento) => setNome(evento.target.value)}
            placeholder="Ex.: Aluguel"
            required
          />
        </div>

        <div className="campo">
          <label htmlFor="fixa-valor">Valor</label>
          <div className="campo-prefixo">
            <span>R$</span>
            <input
              id="fixa-valor"
              type="number"
              min="0"
              step="0.01"
              value={valor}
              onChange={(evento) => setValor(evento.target.value)}
              placeholder="0,00"
              required
            />
          </div>
        </div>

        <div className="campo">
          <label htmlFor="fixa-dia">Dia do vencimento</label>
          <input
            id="fixa-dia"
            type="number"
            min="1"
            max="31"
            value={diaVencimento}
            onChange={(evento) => setDiaVencimento(evento.target.value)}
            placeholder="Ex.: 10"
            required
          />
        </div>

        <div className="campo">
          <label htmlFor="fixa-conta">Conta</label>
          <select
            id="fixa-conta"
            value={contaId}
            onChange={(evento) => setContaId(evento.target.value)}
            required
          >
            <option value="">Selecione a conta</option>
            {contas.map((conta) => (
              <option key={conta.id} value={conta.id}>{conta.nome}</option>
            ))}
          </select>
        </div>

        <div className="campo">
          <label htmlFor="fixa-categoria">Categoria</label>
          <select
            id="fixa-categoria"
            value={categoriaId}
            onChange={(evento) => setCategoriaId(evento.target.value)}
            required
          >
            <option value="">Selecione a categoria</option>
            {categorias.map((categoria) => (
              <option key={categoria.id} value={categoria.id}>{categoria.nome}</option>
            ))}
          </select>
        </div>
      </div>

      {erro && (
        <div className="mensagem mensagem-erro">
          <span>!</span>
          <p>{erro}</p>
        </div>
      )}

      <button className="botao-principal" type="submit">
        Adicionar conta fixa
      </button>
    </form>
  )
}

export default FormularioContaFixa
