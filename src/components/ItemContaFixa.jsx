function ItemContaFixa({ contaFixa, aoPagar, aoDesativar }) {
    return (
        <li>
            {contaFixa.nome} - R$ {contaFixa.valor} - vence dia {contaFixa.dia_vencimento}
            <button onClick={() => aoPagar(contaFixa.id)}>Pagar</button>
            <button onClick={() => aoDesativar(contaFixa.id)}>Desativar</button>
        </li>
    )
}
export default ItemContaFixa