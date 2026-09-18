import ItemConta from './ItemConta'
import ListaScroll from './ListaScroll'

function ListaContas({ contas, aoDeletar }) {
  if (contas.length === 0) {
    return (
      <div className="estado-vazio estado-vazio-lista">
        <span>▣</span>
        <strong>Nenhuma conta cadastrada</strong>
        <p>Crie sua primeira conta para começar.</p>
      </div>
    )
  }

  return (
    <ListaScroll>
      {contas.map((conta) => (
        <ItemConta
          key={conta.id}
          conta={conta}
          aoDeletar={aoDeletar}
        />
      ))}
    </ListaScroll>
  )
}

export default ListaContas
