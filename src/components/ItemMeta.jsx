import { useState } from "react";

function ItemMeta({ meta, aoContribuir }){
    const [valorContribuicao, setValorContribuicao] = useState('')

    async function handleContribuir() {
        if(!valorContribuicao) return 
        await aoContribuir(meta.id, parseFloat(valorContribuicao))
        setValorContribuicao('')
    }

    const progresso = (meta.valor_atual / meta.valor_alvo) * 100

    return (
        <li>
            <strong>{meta.nome}</strong> - R$ {meta.valor_atual} / R$ {meta.valor_alvo}
            {' '}({progresso.toFixed(0)}%)

            <div>
                <input
                    type="number"
                    step="0.01"
                    value={valorContribuicao}
                    onChange={(evento) => setValorContribuicao(evento.target.value)}
                    placeholder="Valor a contribuir"
                />
                <button onClick={handleContribuir}>Contribuir</button>
            </div>
        </li>
    )
}

export default ItemMeta