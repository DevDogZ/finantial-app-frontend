import ItemDivida from './ItemDivida'

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
    <ul className="lista-registros">
      {dividas.map((divida) => (
        <ItemDivida
          key={divida.id}
          divida={divida}
          aoPagarParcela={aoPagarParcela}
          aoDeletar={aoDeletar}
        />
      ))}
    </ul>
  )
}

export default ListaDividas
