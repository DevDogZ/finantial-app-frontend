function ItemDivida({ divida, aoPagarParcela }){
    return (
        <li>
            {divida.nome} - {divida.parcelas_pagas}/{divida.numero_parcelas} parcelas - 
            R$ {divida.valor_parcela} cada
            {divida.quitada ? (
                <strong>(Quitada)</strong>
            ) : (
                <button onClick={() => aoPagarParcela(divida.id)}>Pagar parcela</button>
            )}
        </li>
    )
}
export default ItemDivida