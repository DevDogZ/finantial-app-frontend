import ItemDivida from './ItemDivida'
import ListaScroll from './ListaScroll'

// Dívidas têm cards altos (barra de progresso), então limitamos
// a 3 itens visíveis antes da rolagem interna.
function ListaDividas({ dividas, aoPagarParcela, aoDeletar }) {
  if (dividas.length === 0) {
    return (
      <div className="estado-vazio estado-vazio-lista">
        <span>△</span>
        <strong>Nenhuma dívida cadastrada</strong>
        <p>Seus compromissos financeiros aparecerão aqui.</p>
      </div>
    )
  }

  return (
    <ListaScroll className="lista-registros lista-menor">
      {dividas.map((divida) => (
        <ItemDivida
          key={divida.id}
          divida={divida}
          aoPagarParcela={aoPagarParcela}
          aoDeletar={aoDeletar}
        />
      ))}
    </ListaScroll>
  )
}

export default ListaDividas
