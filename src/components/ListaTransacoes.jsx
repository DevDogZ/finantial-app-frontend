function ListaTransacoes({ transacoes, aoDeletar }) {

  function formatarMoeda(valor) {
    return Number(valor || 0).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
  }

  function formatarData(data) {
    if (!data) {
      return ''
    }

    const partes = String(data).split('-')

    if (partes.length === 3) {
      return `${partes[2]}/${partes[1]}/${partes[0]}`
    }

    return data
  }

  if (transacoes.length === 0) {
    return (
      <div className="estado-vazio">
        <div className="estado-vazio-icone">
          ↕
        </div>

        <strong>Nenhuma transação registrada</strong>

        <p>
          Suas movimentações aparecerão aqui.
        </p>
      </div>
    )
  }

  return (
    <div className="lista-registros">

      {transacoes.map((transacao) => {
        const entrada = transacao.tipo === 'entrada'

        return (
          <div
            className={`registro-card registro-transacao ${
              entrada
                ? 'registro-transacao-entrada'
                : 'registro-transacao-saida'
            }`}
            key={transacao.id}
          >

            <div
              className={`registro-icone ${
                entrada
                  ? 'registro-icone-entrada'
                  : 'registro-icone-saida'
              }`}
            >
              {entrada ? '↑' : '↓'}
            </div>


            <div className="registro-conteudo">

              <strong>
                {transacao.descricao || 'Transação'}
              </strong>

              <div className="registro-meta">

                <span>
                  {formatarData(transacao.data)}
                </span>

                <span className="registro-ponto">
                  •
                </span>

                <span className={
                  entrada
                    ? 'texto-entrada'
                    : 'texto-saida'
                }>
                  {entrada ? 'Entrada' : 'Saída'}
                </span>

              </div>

            </div>


            <div
              className={`registro-valor ${
                entrada
                  ? 'texto-entrada'
                  : 'texto-saida'
              }`}
            >
              {entrada ? '+' : '-'} {formatarMoeda(transacao.valor)}
            </div>


            <div className="registro-acoes">

              <button
                type="button"
                className="botao-excluir"
                onClick={() => aoDeletar(transacao.id)}
                title="Excluir transação"
              >
                <span>×</span>
                Excluir
              </button>

            </div>

          </div>
        )
      })}

    </div>
  )
}

export default ListaTransacoes