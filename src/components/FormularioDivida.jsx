import { useState } from 'react'

function FormularioDivida({ aoCriar, contas, categorias }) {
  const [nome, setNome] = useState('')
  const [valorParcela, setValorParcela] = useState('')
  const [numeroParcelas, setNumeroParcelas] = useState('')
  const [contaId, setContaId] = useState('')
  const [categoriaId, setCategoriaId] = useState('')
  const [erro, setErro] = useState('')

  async function handleSubmit(evento) {
    evento.preventDefault()
    setErro('')

    try {
      await aoCriar({
        nome: nome.trim(),
        valor_parcela: parseFloat(valorParcela),
        numero_parcelas: parseInt(numeroParcelas),
        conta_id: parseInt(contaId),
        categoria_id: parseInt(categoriaId),
      })

      setNome('')
      setValorParcela('')
      setNumeroParcelas('')
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
          <label htmlFor="divida-nome">Nome da dívida</label>
          <input
            id="divida-nome"
            type="text"
            value={nome}
            onChange={(evento) => setNome(evento.target.value)}
            placeholder="Ex.: Empréstimo"
            required
          />
        </div>

        <div className="campo">
          <label htmlFor="divida-valor">Valor da parcela</label>
          <div className="campo-prefixo">
            <span>R$</span>
            <input
              id="divida-valor"
              type="number"
              min="0"
              step="0.01"
              value={valorParcela}
              onChange={(evento) => setValorParcela(evento.target.value)}
              placeholder="0,00"
              required
            />
          </div>
        </div>

        <div className="campo">
          <label htmlFor="divida-parcelas">Número de parcelas</label>
          <input
            id="divida-parcelas"
            type="number"
            min="1"
            value={numeroParcelas}
            onChange={(evento) => setNumeroParcelas(evento.target.value)}
            placeholder="Ex.: 12"
            required
          />
        </div>

        <div className="campo">
          <label htmlFor="divida-conta">Conta</label>
          <select
            id="divida-conta"
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
          <label htmlFor="divida-categoria">Categoria</label>
          <select
            id="divida-categoria"
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
        Adicionar dívida
      </button>
    </form>
  )
}

export default FormularioDivida
