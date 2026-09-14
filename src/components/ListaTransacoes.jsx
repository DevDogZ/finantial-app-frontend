function ListaTransacoes({ transacoes }) {
  return (
    <ul>
      {transacoes.map((transacao) => (
        <li key={transacao.id}>
          {transacao.data} — {transacao.descricao} — {transacao.tipo} — R$ {transacao.valor}
        </li>
      ))}
    </ul>
  )
}

export default ListaTransacoes