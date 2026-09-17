function ListaTransacoes({ transacoes, aoDeletar }) {
  return (
    <ul>
      {transacoes.map((transacao) => (
        <li key={transacao.id}>
          {transacao.data} — {transacao.descricao} — {transacao.tipo} — R$ {transacao.valor}
          <button onClick={() => aoDeletar(transacao.id)}>Apagar</button>
        </li>
      ))}
    </ul>
  )
}

export default ListaTransacoes