import ItemCompraCartao from "./ItemCompraCartao";

function ListaComprasCartao({ compras }) {
    return (
        <ul>
            {compras.map((compra) => (
                <ItemCompraCartao key={compra.id} compra={compra} />
            ))}
        </ul>
    )
}

export default ListaComprasCartao