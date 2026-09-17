import { useState } from "react";
import { getFatura } from "../api";

function VisualizadorFatura({ cartoes }){
    const [cartaoId, setCartaoId] = useState('')
    const [mes, setMes] = useState('')
    const [ano, setAno] = useState('')
    const [fatura, setFatura] = useState(null)

    async function handleBuscar(){
        if(!cartaoId || !mes || !ano ) return 
        const dados = await getFatura(cartaoId, mes, ano)
        setFatura(dados)
    }

    return (
        <div className="formulario-padrao">
            <div className="formulario-grid">
                <div className="campo campo-largo">
                    <label htmlFor="fatura-cartao">Cartão</label>
                    <select
                        id="fatura-cartao"
                        value={cartaoId}
                        onChange={(evento) => setCartaoId(evento.target.value)}
                    >
                        <option value="">Selecione o cartao</option>
                        {cartoes.map((cartao) => <option key={cartao.id} value={cartao.id}>{cartao.nome}</option>)}
                    </select>
                </div>

                <div className="campo">
                    <label htmlFor="fatura-mes">Mês</label>
                    <input
                        id="fatura-mes"
                        type="number"
                        min="1"
                        max="12"
                        value={mes}
                        onChange={(evento) => setMes(evento.target.value)}
                        placeholder="Mes"
                    />
                </div>

                <div className="campo">
                    <label htmlFor="fatura-ano">Ano</label>
                    <input
                        id="fatura-ano"
                        type="number"
                        value={ano}
                        onChange={(evento) => setAno(evento.target.value)}
                        placeholder="Ano"
                    />
                </div>
            </div>

            <button className="botao-principal" onClick={handleBuscar}>Ver fatura</button>

            {fatura && (
                <div className="painel painel-fatura-resultado">
                    <h3>Fatura {fatura.mes}/{fatura.ano} - Total: R$ {fatura.total}</h3>
                    <ul>
                        {fatura.parcelas.map((parcela) => (
                            <li key={parcela.id}>Parcela - 
                                                {parcela.numero_parcela}: R$ {parcela.valor_parcela}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default VisualizadorFatura