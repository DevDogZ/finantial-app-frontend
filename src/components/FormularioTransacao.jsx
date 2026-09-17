import { useState } from 'react'

function FormularioTransacao({ aoCriar, contas, categorias }) {
  const [descricao, setDescricao] = useState('')
  const [valor, setValor] = useState('')
  const [tipo, setTipo] = useState('saida')
  const [data, setData] = useState('')
  const [contaId, setContaId] = useState('')
  const [categoriaId, setCategoriaId] = useState('')

  function handleSubmit(evento) {
    evento.preventDefault()

    if (
      !descricao.trim() ||
      valor === '' ||
      !data ||
      !contaId ||
      !categoriaId
    ) {
      return
    }

    aoCriar({
      descricao: descricao.trim(),
      valor: parseFloat(valor),
      tipo,
      data,
      conta_id: parseInt(contaId),
      categoria_id: parseInt(categoriaId),
    })

    setDescricao('')
    setValor('')
    setData('')
    setContaId('')
    setCategoriaId('')
    setTipo('saida')
  }

  return (
    <form
      className="formulario-padrao formulario-transacao"
      onSubmit={handleSubmit}
    >

      <div className="campo campo-largo">
        <label htmlFor="transacao-descricao">
          Descrição
        </label>

        <input
          id="transacao-descricao"
          type="text"
          value={descricao}
          onChange={(evento) => setDescricao(evento.target.value)}
          placeholder="Ex.: Supermercado, salário, Pix..."
          required
          autoFocus
        />
      </div>


      <div className="formulario-grid">

        <div className="campo">
          <label htmlFor="transacao-valor">
            Valor
          </label>

          <div className="campo-prefixo">
            <span>R$</span>

            <input
              id="transacao-valor"
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
          <label htmlFor="transacao-tipo">
            Tipo
          </label>

          <select
            id="transacao-tipo"
            value={tipo}
            onChange={(evento) => setTipo(evento.target.value)}
          >
            <option value="saida">
              Saída
            </option>

            <option value="entrada">
              Entrada
            </option>
          </select>
        </div>


        <div className="campo">
          <label htmlFor="transacao-data">
            Data
          </label>

          <input
            id="transacao-data"
            type="date"
            value={data}
            onChange={(evento) => setData(evento.target.value)}
            required
          />
        </div>


        <div className="campo">
          <label htmlFor="transacao-conta">
            Conta
          </label>

          <select
            id="transacao-conta"
            value={contaId}
            onChange={(evento) => setContaId(evento.target.value)}
            required
          >
            <option value="">
              Selecione a conta
            </option>

            {contas.map((conta) => (
              <option
                key={conta.id}
                value={conta.id}
              >
                {conta.nome}
              </option>
            ))}
          </select>
        </div>


        <div className="campo">
          <label htmlFor="transacao-categoria">
            Categoria
          </label>

          <select
            id="transacao-categoria"
            value={categoriaId}
            onChange={(evento) => setCategoriaId(evento.target.value)}
            required
          >
            <option value="">
              Selecione a categoria
            </option>

            {categorias.map((categoria) => (
              <option
                key={categoria.id}
                value={categoria.id}
              >
                {categoria.nome}
              </option>
            ))}
          </select>
        </div>

      </div>


      <div className="formulario-acoes-transacao">

        <button
          className="botao-principal"
          type="submit"
        >
          Adicionar transação
        </button>

      </div>

    </form>
  )
}

export default FormularioTransacao