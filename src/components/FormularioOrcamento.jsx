import { useState } from 'react'

function FormularioOrcamento({ aoCriar, categorias }) {
  const [categoriaId, setCategoriaId] = useState('')
  const [mes, setMes] = useState('')
  const [ano, setAno] = useState('')
  const [valorLimite, setValorLimite] = useState('')
  const [erro, setErro] = useState('')

  async function handleSubmit(evento) {
    evento.preventDefault()
    setErro('')

    try {
      await aoCriar({
        categoria_id: parseInt(categoriaId),
        mes: parseInt(mes),
        ano: parseInt(ano),
        valor_limite: parseFloat(valorLimite),
      })

      setCategoriaId('')
      setMes('')
      setAno('')
      setValorLimite('')
    } catch (e) {
      setErro(e.message)
    }
  }

  return (
    <form className="formulario-padrao" onSubmit={handleSubmit}>
      <div className="formulario-grid">
        <div className="campo campo-largo">
          <label htmlFor="orcamento-categoria">Categoria</label>
          <select
            id="orcamento-categoria"
            value={categoriaId}
            onChange={(evento) => setCategoriaId(evento.target.value)}
            required
          >
            <option value="">Selecione a categoria</option>
            {categorias.map((categoria) => (
              <option key={categoria.id} value={categoria.id}>
                {categoria.nome}
              </option>
            ))}
          </select>
        </div>

        <div className="campo">
          <label htmlFor="orcamento-mes">Mês</label>
          <input
            id="orcamento-mes"
            type="number"
            min="1"
            max="12"
            value={mes}
            onChange={(evento) => setMes(evento.target.value)}
            placeholder="1 a 12"
            required
          />
        </div>

        <div className="campo">
          <label htmlFor="orcamento-ano">Ano</label>
          <input
            id="orcamento-ano"
            type="number"
            value={ano}
            onChange={(evento) => setAno(evento.target.value)}
            placeholder="2026"
            required
          />
        </div>

        <div className="campo">
          <label htmlFor="orcamento-limite">Valor limite</label>
          <div className="campo-prefixo">
            <span>R$</span>
            <input
              id="orcamento-limite"
              type="number"
              min="0"
              step="0.01"
              value={valorLimite}
              onChange={(evento) => setValorLimite(evento.target.value)}
              placeholder="0,00"
              required
            />
          </div>
        </div>
      </div>

      {erro && (
        <div className="mensagem mensagem-erro">
          <span>!</span>
          <p>{erro}</p>
        </div>
      )}

      <button className="botao-principal" type="submit">
        Criar orçamento
      </button>
    </form>
  )
}

export default FormularioOrcamento
