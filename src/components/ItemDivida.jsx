function ItemDivida({ divida, aoPagarParcela, aoDeletar }) {
  const moeda = Number(divida.valor_parcela || 0).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  const progresso = divida.numero_parcelas > 0
    ? Math.min((divida.parcelas_pagas / divida.numero_parcelas) * 100, 100)
    : 0

  return (
    <li className="registro-card">
      <div className="registro-icone registro-icone-divida">△</div>

      <div className="registro-conteudo registro-meta-conteudo">
        <span className="registro-label">DÍVIDA</span>
        <strong className="registro-titulo">{divida.nome}</strong>

        <div className="progresso-info">
          <span>{divida.parcelas_pagas} de {divida.numero_parcelas} parcelas</span>
          <strong>{progresso.toFixed(0)}%</strong>
        </div>

        <div className="barra-progresso barra-divida">
          <div style={{ width: `${progresso}%` }} />
        </div>

        <span className="registro-subtitulo">{moeda} por parcela</span>
      </div>

      <div className="registro-status">
        {divida.quitada ? (
          <span className="badge-tipo badge-quitada">Quitada</span>
        ) : (
          <button
            type="button"
            className="botao-sucesso"
            onClick={() => aoPagarParcela(divida.id)}
          >
            Pagar parcela
          </button>
        )}
      </div>

      <button
        type="button"
        className="botao-perigo"
        onClick={() => aoDeletar(divida.id)}
      >
        Excluir
      </button>
    </li>
  )
}

export default ItemDivida
