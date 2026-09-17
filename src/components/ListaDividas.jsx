import ItemDivida from './ItemDivida'

function ListaDividas({ dividas, aoPagarParcela, aoDeletar }){
    return (
        <ul>
            {dividas.map((divida) => (
                <ItemDivida key={divida.id} divida={divida} aoPagarParcela={aoPagarParcela} aoDeletar={aoDeletar} />
            ))}
        </ul>
    )
}
export default ListaDividas