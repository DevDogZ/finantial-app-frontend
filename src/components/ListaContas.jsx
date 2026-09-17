import ItemConta from './ItemConta'

function ListaContas({ contas, aoDeletar }) {
  return (
    <ul>
      {contas.map((conta) => (
        <ItemConta key={conta.id} conta={conta} aoDeletar={aoDeletar} />
      ))}
    </ul>
  )
}

export default ListaContas