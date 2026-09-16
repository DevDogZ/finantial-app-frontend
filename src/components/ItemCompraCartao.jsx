function ItemCompraCartao({ compra }) {

    return (
        <li>
            <strong>{compra.descricao}</strong> - R$ {compra.valor_total} em {compra.numero_parcelas}x
            <ul>
                {compra.parcelas.map((parcela) => (
                    <li key={parcela.id}>
                        Parcela {parcela.numero_parcela}: 
                            R$ {parcela.valor_parcela} - fatura {parcela.mes_fatura}/{parcela.ano_fatura}
                    </li>
                ))}
            </ul>
        </li>
    )
}

export default ItemCompraCartao