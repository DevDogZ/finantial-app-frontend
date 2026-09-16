import ItemConta from './ItemConta'

function ListaContas({ contas }) {
  return (
    <ul>
      {contas.map((conta) => (
        <ItemConta key={conta.id} conta={conta} />
      ))}
    </ul>
  )
}

export default ListaContas