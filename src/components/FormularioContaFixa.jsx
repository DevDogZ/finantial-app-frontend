import { useState } from "react";

function FormularioContaFixa({ aoCriar, contas, categorias }) {
    const [nome, setNome] = useState('')
    const [valor, setValor] = useState('')
    const [diaVencimento, setDiaVencimento] = useState('')
    const [contaId, setContaId] = useState('')
    const [categoriaId, setCategoriaId] = useState('')
    const [erro, setErro] = useState('')

    async function handleSubmit(evento) {
        evento.preventDefault()
        setErro('')

        try {
            await aoCriar({
                nome,
                valor: parseFloat(valor),
                dia_vencimento: parseInt(diaVencimento),
                conta_id: parseInt(contaId),
                categoria_id: parseInt(categoriaId),
            })
            setNome('')
            setValor('')
            setDiaVencimento('')
        } catch (e) {
            setErro(e.message)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={nome}
                onChange={(evento) => setNome(evento.target.value)}
                placeholder="Nome (ex: Aluguel)"
            />

            <input
                type="number"
                step="0.01"
                value={valor}
                onChange={(evento) => setValor(evento.target.value)}
                placeholder="Valor"
            />

            <input
                type="number"
                min="1"
                max="31"
                value={diaVencimento}
                onChange={(evento) => setDiaVencimento(evento.target.value)}
                placeholder="Dia do vencimento"
            />

            <select value={contaId} onChange={(evento) => setContaId(evento.target.value)}>
                <option value="">Selecione a conta</option>
                {contas.map((conta) => (
                    <option key={conta.id} value={conta.id}>{conta.nome}</option>
                ))}
            </select>

            <select value={categoriaId} onChange={(evento) => setCategoriaId(evento.target.value)}>
                <option value="">Selecione a categoria</option>
                {categorias.map((categoria) => (
                    <option key={categoria.id} value={categoria.id}>{categoria.nome}</option>
               ))}
            </select>

            <button type="submit">Adicionar</button>
            {erro && <p style={{ color: 'red' }}>{erro}</p>}
        </form>
    )
}


export default FormularioContaFixa