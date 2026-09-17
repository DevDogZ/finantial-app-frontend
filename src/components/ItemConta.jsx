import { useState, useEffect } from "react";
import { getSaldoConta } from "../api";

function ItemConta({ conta, aoDeletar }){
    const [saldo, setSaldo] = useState(null)

    useEffect(() => {
        getSaldoConta(conta.id).then((dados) => setSaldo(dados.saldo_atual))
    }, [conta.id])

    return (
        <li>
            {conta.nome} - saldo atual: {saldo === null ? 'carregando...': `R$ ${saldo}`}
            <button onClick={() => aoDeletar(conta.id)}>Apagar</button>
        </li>
    )
}

export default ItemConta