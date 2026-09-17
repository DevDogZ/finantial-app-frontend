import { useState } from 'react'

function FormularioCompraCartao({ aoCriar, cartoes, categorias, aoCancelar }) {
  const [descricao, setDescricao] = useState('')
  const [valorTotal, setValorTotal] = useState('')
  const [numeroParcelas, setNumeroParcelas] = useState('1')
  const [dataCompra, setDataCompra] = useState('')
  const [cartaoId, setCartaoId] = useState('')
  const [categoriaId, setCategoriaId] = useState('')
  const [erro, setErro] = useState('')

  async function handleSubmit(evento) {
    evento.preventDefault()
    setErro('')

    try {
      await aoCriar({
        descricao: descricao.trim(),
        valor_total: parseFloat(valorTotal),
        numero_parcelas: parseInt(numeroParcelas),
        data_compra: dataCompra,
        cartao_id: parseInt(cartaoId),
        categoria_id: parseInt(categoriaId),
      })

      setDescricao('')
      setValorTotal('')
      setNumeroParcelas('1')
      setDataCompra('')
      setCartaoId('')
      setCategoriaId('')
    } catch (e) {
      setErro(e.message)
    }
  }

  return (
    <form className="formulario-padrao" onSubmit={handleSubmit}>
      <div className="formulario-grid">
        <div className="campo campo-largo">
          <label htmlFor="compra-descricao">Descrição da compra</label>
          <input
            id="compra-descricao"
            type="text"
            value={descricao}
            onChange={(evento) => setDescricao(evento.target.value)}
            placeholder="Ex.: Notebook"
            required
          />
        </div>

        <div className="campo">
          <label htmlFor="compra-valor">Valor total</label>
          <div className="campo-prefixo">
            <span>R$</span>
            <input
              id="compra-valor"
              type="number"
              min="0"
              step="0.01"
              value={valorTotal}
              onChange={(evento) => setValorTotal(evento.target.value)}
              placeholder="0,00"
              required
            />
          </div>
        </div>

        <div className="campo">
          <label htmlFor="compra-parcelas">Parcelas</label>
          <input
            id="compra-parcelas"
            type="number"
            min="1"
            value={numeroParcelas}
            onChange={(evento) => setNumeroParcelas(evento.target.value)}
            required
          />
        </div>

        <div className="campo">
          <label htmlFor="compra-data">Data da compra</label>
          <input
            id="compra-data"
            type="date"
            value={dataCompra}
            onChange={(evento) => setDataCompra(evento.target.value)}
            required
          />
        </div>

        <div className="campo">
          <label htmlFor="compra-cartao">Cartão</label>
          <select
            id="compra-cartao"
            value={cartaoId}
            onChange={(evento) => setCartaoId(evento.target.value)}
            required
          >
            <option value="">Selecione o cartão</option>
            {cartoes.map((cartao) => (
              <option key={cartao.id} value={cartao.id}>{cartao.nome}</option>
            ))}
          </select>
        </div>

        <div className="campo">
          <label htmlFor="compra-categoria">Categoria</label>
          <select
            id="compra-categoria"
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

      <div className="formulario-acoes-modal">
        <button type="button" className="botao-secundario" onClick={aoCancelar}>
          Cancelar
        </button>
        <button className="botao-principal" type="submit">
          Registrar compra
        </button>
      </div>
    </form>
  )
}

export default FormularioCompraCartao
