import { useState } from "react";

function formularioConta( { aoCriar }) {
    const [nome, setNome] = useState('')
    const [saldoInicial, setSaldoInicial] = useState('')


    function handleSubmit(evento) {
        evento.preventDefault()
        aoCriar(nome, parseFloat(saldoInicial))
        setNome('')
        setSaldoInicial('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={nome} 
                onChange={(evento) => setNome(evento.target.value)}
                placeholder="Nome da conta"
            />

            <input 
                type="number"
                step={"0.01"}
                value={saldoInicial}
                onChange={(evento) => setSaldoInicial(evento.target.value)}
                placeholder="Saldo inicial"
            />

            <button type="submit">Adicionar</button>
        </form>
    )
}

export default formularioConta