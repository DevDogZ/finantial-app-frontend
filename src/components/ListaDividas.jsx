import ItemDivida from './ItemDivida'

function ListaDividas({ dividas, aoPagarParcela }){
    return (
        <ul>
            {dividas.map((divida) => (
                <ItemDivida key={divida.id} divida={divida} aoPagarParcela={aoPagarParcela}/>
            ))}
        </ul>
    )
}
export default ListaDividas