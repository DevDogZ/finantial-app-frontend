import ListaScroll from './ListaScroll'

function ListaOrcamentos({ orcamentos, aoDeletar }) {
  function moeda(valor) {
    return Number(valor || 0).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
  }

  if (orcamentos.length === 0) {
    return (
      <div className="estado-vazio estado-vazio-lista">
        <span>◎</span>
        <strong>Nenhum orçamento cadastrado</strong>
        <p>Defina limites para acompanhar seus gastos.</p>
      </div>
    )
  }

  return (
    <ListaScroll>
      {orcamentos.map((orcamento) => (
        <li key={orcamento.id} className="registro-card">
          <div className="registro-icone">◎</div>

          <div className="registro-conteudo">
            <span className="registro-label">ORÇAMENTO</span>
            <strong className="registro-titulo">
              {String(orcamento.mes).padStart(2, '0')}/{orcamento.ano}
            </strong>
            <span className="registro-subtitulo">Limite definido para o período</span>
          </div>

          <div className="registro-valor">
            <span className="registro-label">LIMITE</span>
            <strong>{moeda(orcamento.valor_limite)}</strong>
          </div>

          <button
            type="button"
            className="botao-perigo"
            onClick={() => aoDeletar(orcamento.id)}
          >
            Excluir
          </button>
        </li>
      ))}
    </ListaScroll>
  )
}

export default ListaOrcamentos
