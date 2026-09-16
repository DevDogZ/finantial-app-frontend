import { useState } from "react";

function FormularioDivida({ aoCriar, contas, categorias }){
    const [nome, setNome] = useState('')
    const [valorParcela, setValorParcela] = useState('')
    const [numeroParcelas, setNumeroParcelas] = useState('')
    const [contaId, setContaId] = useState('')
    const [categoriaId, setCategoriaId] = useState('')
    const [erro, setErro] = useState('')


    async function handleSubmit(evento) {
        evento.preventDefault()
        setErro('')

        try {
            await aoCriar({
                nome,
                valor_parcela: parseFloat(valorParcela),
                numero_parcelas: parseInt(numeroParcelas),
                conta_id: parseInt(contaId),
                categoria_id: parseInt(categoriaId),
            })
            setNome('')
            setValorParcela('')
            setNumeroParcelas('')
        } catch (e) {
            setErro(e.message)
        }
    }

    return (

        <form onSubmit={handleSubmit}>

            <input
                type="text"
                value={nome}
                onChange={ (evento) => setNome(evento.target.value)}
                placeholder="Nome da divida"
            />

            <input 
                type="number" 
                step="0.01" 
                value={valorParcela}
                onChange={(evento) => setValorParcela(evento.target.value)}
                placeholder="Valor da parcela"
            />

            <input
                type="number"
                min="1"
                value={numeroParcelas}
                onChange={(evento) => setNumeroParcelas(evento.target.value)}
                placeholder="Numero de parcelas"
            />

            <select value={contaId} onChange={(evento) => setContaId(evento.target.value)}>
                <option value="">Selecione a conta</option>
                {contas.map((conta) => <option key={conta.id} value={conta.id}>{conta.nome}</option>)}
            </select>

            <select value={categoriaId} onChange={(evento) => setCategoriaId(evento.target.value)}>
                <option value="">Selecione a categoria</option>
                {categorias.map((categoria) => <option 
                                    key={categoria.id} value={categoria.id}>{categoria.nome}</option>)}
            </select>

            <button type="submit">Adicionar</button>
            {erro && <p style={{ color: 'red'}}>{erro}</p>}
        </form>
    )
}

export default FormularioDivida