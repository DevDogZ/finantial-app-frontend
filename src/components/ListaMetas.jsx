import ItemMeta from './ItemMeta'
import ListaScroll from './ListaScroll'

// Metas têm cards altos (barra de progresso + contribuição), então
// limitamos a 3 itens visíveis antes da rolagem interna.
function ListaMetas({ metas, aoContribuir, aoDeletar }) {
  if (metas.length === 0) {
    return (
      <div className="estado-vazio estado-vazio-lista">
        <span>◇</span>
        <strong>Nenhuma meta cadastrada</strong>
        <p>Defina um objetivo e acompanhe seu progresso.</p>
      </div>
    )
  }

  return (
    <ListaScroll className="lista-registros lista-menor">
      {metas.map((meta) => (
        <ItemMeta
          key={meta.id}
          meta={meta}
          aoContribuir={aoContribuir}
          aoDeletar={aoDeletar}
        />
      ))}
    </ListaScroll>
  )
}

export default ListaMetas
