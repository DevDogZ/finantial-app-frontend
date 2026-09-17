function ItemContaFixa({ contaFixa, aoPagar, aoDesativar }) {
  const moeda = Number(contaFixa.valor || 0).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <li className="registro-card">
      <div className="registro-icone registro-icone-fixa">□</div>

      <div className="registro-conteudo">
        <span className="registro-label">CONTA FIXA</span>
        <strong className="registro-titulo">{contaFixa.nome}</strong>
        <span className="registro-subtitulo">
          Vencimento: dia {contaFixa.dia_vencimento}
        </span>
      </div>

      <div className="registro-valor">
        <strong>{moeda}</strong>
        <span className="registro-subtitulo">mensal</span>
      </div>

      <div className="registro-acoes">
        <button
          type="button"
          className="botao-sucesso"
          onClick={() => aoPagar(contaFixa.id)}
        >
          Pagar
        </button>

        <button
          type="button"
          className="botao-perigo"
          onClick={() => aoDesativar(contaFixa.id)}
        >
          Desativar
        </button>
      </div>
    </li>
  )
}

export default ItemContaFixa
