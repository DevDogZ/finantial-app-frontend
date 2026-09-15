import { useState } from "react";

function FormularioMeta({ aoCriar }) {

    const [nome, setNome] = useState('')
    const [valorAlvo, setValorAlvo] = useState('')

    function handleSubmit(evento) {
        evento.preventDefault()
        aoCriar(nome, parseFloat(valorAlvo))
        setNome('')
        setValorAlvo('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={nome}
                onChange={(evento) => setNome(evento.target.value)}
                placeholder="Nome da meta"
            />

            <input 
                type="number"
                step="0.01"
                value={valorAlvo}
                onChange={(evento) => setValorAlvo(evento.target.value)}
                placeholder="Valor alvo"
            />

            <button type="submit">Criar meta</button>
        </form>
    )
}

export default FormularioMeta