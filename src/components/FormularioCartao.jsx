import { useState } from "react";

function FormularioCartao({ aoCriar }){
    const [nome, setNome] = useState('')
    const [limite, setLimite] = useState('')
    const [diaFechamento, setDiaFechamento] = useState('')


    async function handleSubmit(evento) {
        evento.preventDefault()
        aoCriar({
            nome,
            limite: parseFloat(limite),
            dia_fechamento: parseInt(diaFechamento)
        })
        setNome('')
        setLimite('')
        setDiaFechamento('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={nome}
                onChange={(evento) => setNome(evento.target.value)}
                placeholder="Nome do cartao"
            />

            <input 
                type="number"
                step="0.01"
                value={limite}
                onChange={(evento) => setLimite(evento.target.value)}
                placeholder="Limite"
            />

            <input 
                type="number"
                min="1"
                max="31"
                value={diaFechamento}
                onChange={(evento) => setDiaFechamento(evento.target.value)}
                placeholder="Dia de fechamento"
            />
            <button type="submit">Adicionar cartao</button>
        </form>
    )
}

export default FormularioCartao