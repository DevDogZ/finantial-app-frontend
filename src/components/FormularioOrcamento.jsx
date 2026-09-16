import { useState  } from "react";


function FormularioOrcamento( {aoCriar, categorias}) {
    const [categoriaId, setCategoriaId] = useState('')
    const [mes, setMes] = useState('')
    const [ano, setAno] = useState('')
    const [valorLimite, setValorLimite] = useState('')
    const [erro, setErro] = useState('')

    async function handleSubmit(evento){

        evento.preventDefault()
        setErro('')

        try {
            await aoCriar({
                categoria_id: parseInt(categoriaId),
                mes: parseInt(mes),
                ano: parseInt(ano),
                valor_limite: parseFloat(valorLimite),
            })

            setMes('')
            setAno('')
            setValorLimite('')
        } catch (e) {
            setErro(e.message)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <select value={categoriaId} onChange={(evento) => setCategoriaId(evento.target.value)}>
                <option value="">Selecione a categoria</option>
                {categorias.map((categoria) => (
                    <option key={categoria.id} value={categoria.id}>
                        {categoria.nome}
                    </option>
                ))}
            </select>

            <input
                type="number"
                min="1"
                max="12"
                value={mes}
                onChange={(evento) => setMes(evento.target.value)}
                placeholder="Mes (1-12)"
            />


            <input
            type="number"
            value={ano}
            onChange={(evento) => setAno(evento.target.value)}
            placeholder="Ano"
            />


            <input
                type="number"
                step="0.01"
                value={valorLimite}
                onChange={(evento) => setValorLimite(evento.target.value)}
                placeholder="Valor limite"
            />

            <button type="submit">Adicionar</button>

            {erro && <p style={{ color: 'red'}}>{erro}</p>}
        </form>
    )
}

export default FormularioOrcamento