import ItemCompraCartao from './ItemCompraCartao'

function ListaComprasCartao({ compras }) {
  if (compras.length === 0) {
    return (
      <div className="estado-vazio estado-vazio-lista">
        <span>▤</span>
        <strong>Nenhuma compra registrada</strong>
        <p>As compras feitas no cartão aparecerão aqui.</p>
      </div>
    )
  }

  return (
    <ul className="lista-registros">
      {compras.map((compra) => (
        <ItemCompraCartao key={compra.id} compra={compra} />
      ))}
    </ul>
  )
}

export default ListaComprasCartao
