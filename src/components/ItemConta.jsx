function ItemConta({ conta, aoDeletar }) {
  const saldo = Number(conta.saldo_atual ?? conta.saldo_inicial ?? 0)

  function formatarMoeda(valor) {
    return Number(valor || 0).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
  }

  return (
    <div className="registro-card">

      <div className="registro-icone registro-icone-conta">
        $
      </div>

      <div className="registro-conteudo">
        <strong>{conta.nome}</strong>

        <span className="registro-descricao">
          Saldo atual
        </span>
      </div>

      <div className="registro-valor">
        {formatarMoeda(saldo)}
      </div>

      <div className="registro-acoes">
        <button
          type="button"
          className="botao-excluir"
          onClick={() => aoDeletar(conta.id)}
          title="Excluir conta"
        >
          <span>×</span>
          Excluir
        </button>
      </div>

    </div>
  )
}

export default ItemConta