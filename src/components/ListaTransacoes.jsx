function ListaTransacoes({ transacoes, aoDeletar }) {
  function formatarData(data) {
    if (!data) return '--/--/----'

    const partes = String(data).split('-')
    if (partes.length === 3) {
      return `${partes[2]}/${partes[1]}/${partes[0]}`
    }

    return data
  }

  function formatarValor(valor) {
    return Number(valor || 0).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
  }

  if (transacoes.length === 0) {
    return (
      <div className="estado-vazio estado-vazio-lista">
        <span>↕</span>
        <strong>Nenhuma transação registrada</strong>
        <p>Suas movimentações aparecerão aqui.</p>
      </div>
    )
  }

  return (
    <ul className="lista-registros">
      {transacoes.map((transacao) => {
        const entrada = transacao.tipo === 'entrada'

        return (
          <li
            key={transacao.id}
            className={`registro-card registro-transacao ${
              entrada ? 'registro-entrada' : 'registro-saida'
            }`}
          >
            <div className="registro-icone">
              {entrada ? '↓' : '↑'}
            </div>

            <div className="registro-conteudo">
              <strong className="registro-titulo">
                {transacao.descricao || 'Transação'}
              </strong>

              <div className="registro-meta">
                <span>{formatarData(transacao.data)}</span>
                <span className={`badge-tipo ${entrada ? 'badge-entrada' : 'badge-saida'}`}>
                  {entrada ? 'Entrada' : 'Saída'}
                </span>
              </div>
            </div>

            <strong className={`registro-valor financeiro ${entrada ? 'valor-entrada' : 'valor-saida'}`}>
              {entrada ? '+' : '-'} {formatarValor(transacao.valor)}
            </strong>

            <button
              type="button"
              className="botao-perigo"
              onClick={() => aoDeletar(transacao.id)}
            >
              Excluir
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default ListaTransacoes
