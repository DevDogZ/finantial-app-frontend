import { useState } from 'react'

function ItemMeta({ meta, aoContribuir, aoDeletar }) {
  const [valorContribuicao, setValorContribuicao] = useState('')

  async function handleContribuir(evento) {
    evento.preventDefault()

    if (!valorContribuicao || Number(valorContribuicao) <= 0) return

    await aoContribuir(meta.id, parseFloat(valorContribuicao))
    setValorContribuicao('')
  }

  const progresso = meta.valor_alvo > 0
    ? Math.min((meta.valor_atual / meta.valor_alvo) * 100, 100)
    : 0

  const moeda = (valor) => Number(valor || 0).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <li className="registro-card registro-meta-card">
      <div className="registro-icone registro-icone-meta">◇</div>

      <div className="registro-conteudo registro-meta-conteudo">
        <span className="registro-label">META</span>
        <strong className="registro-titulo">{meta.nome}</strong>

        <div className="progresso-info">
          <span>{moeda(meta.valor_atual)} de {moeda(meta.valor_alvo)}</span>
          <strong>{progresso.toFixed(0)}%</strong>
        </div>

        <div className="barra-progresso">
          <div style={{ width: `${progresso}%` }} />
        </div>

        <form className="contribuir-form" onSubmit={handleContribuir}>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={valorContribuicao}
            onChange={(evento) => setValorContribuicao(evento.target.value)}
            placeholder="Valor da contribuição"
          />
          <button type="submit" className="botao-sucesso">
            Contribuir
          </button>
        </form>
      </div>

      <button
        type="button"
        className="botao-perigo"
        onClick={() => aoDeletar(meta.id)}
      >
        Excluir
      </button>
    </li>
  )
}

export default ItemMeta
