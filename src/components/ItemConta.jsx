import { useState, useEffect } from "react";
import { getSaldoConta } from "../api";

function ItemConta({ conta }){
    const [saldo, setSaldo] = useState(null)

    useEffect(() => {
        getSaldoConta(conta.id).then((dados) => setSaldo(dados.saldo_atual))
    }, [conta.id])

    return (
        <li>
            {conta.nome} - saldo atual: {saldo === null ? 'carregando...': `R$ ${saldo}`}
        </li>
    )
}

export default ItemConta