function ItemCompraCartao({ compra }) {
  const moeda = (valor) => Number(valor || 0).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <li className="registro-card registro-compra">
      <div className="registro-icone">▤</div>

      <div className="registro-conteudo">
        <span className="registro-label">COMPRA</span>
        <strong className="registro-titulo">{compra.descricao}</strong>
        <span className="registro-subtitulo">
          {compra.numero_parcelas}x de {moeda(compra.valor_total / compra.numero_parcelas)}
        </span>

        {compra.parcelas?.length > 0 && (
          <div className="parcelas-lista">
            {compra.parcelas.map((parcela) => (
              <span key={parcela.id} className="parcela-pill">
                {parcela.numero_parcela}ª · {moeda(parcela.valor_parcela)} · {parcela.mes_fatura}/{parcela.ano_fatura}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="registro-valor">
        <span className="registro-label">TOTAL</span>
        <strong>{moeda(compra.valor_total)}</strong>
      </div>
    </li>
  )
}

export default ItemCompraCartao
