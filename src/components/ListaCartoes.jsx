function ListaCartoes({ cartoes, aoDeletar }) {
  return (
    <ul>
      {cartoes.map((cartao) => (
        <li key={cartao.id}>
          {cartao.nome} — limite R$ {cartao.limite} — fecha dia {cartao.dia_fechamento}
          <button onClick={() => aoDeletar(cartao.id)}>Apagar</button>
        </li>
      ))}
    </ul>
  )
}

export default ListaCartoes
