import { useState } from "react";
import { criarCategoria } from "../api";


function FormularioCompraCartao({ aoCriar, cartoes, categorias }) {
    const [descricao, setDescricao] = useState('')
    const [valorTotal, setValorTotal]= useState('')
    const [numeroParcelas, setNumeroParcelas] = useState('1')
    const [dataCompra, setDataCompra] = useState('')
    const [cartaoId, setCartaoId] = useState('')
    const [categoriaId, setCategoriaId] = useState('')
    const [erro, setErro] = useState('')

    async function handleSubmit(evento){
        evento.preventDefault()
        setErro('')

        try {
            await aoCriar({
                descricao,
                valor_total: parseFloat(valorTotal),
                numero_parcelas: parseInt(numeroParcelas),
                data_compra: dataCompra,
                cartao_id: parseInt(cartaoId),
                categoria_id: parseInt(categoriaId),
            })
            setDescricao('')
            setValorTotal('')
            setNumeroParcelas('1')
            setDataCompra('')
        } catch (e) {
            setErro(e.message)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={descricao}
                onChange={(evento) => setDescricao(evento.target.value)}
                placeholder="Descricao da compra"
            />

            <input 
                type="number"
                step="0.01"
                value={valorTotal}
                onChange={(evento) => setValorTotal(evento.target.value)}
                placeholder="Valor da compra"
            />

            <input 
                type="number"
                min="1"
                value={numeroParcelas}
                onChange={(evento) => setNumeroParcelas(evento.target.value)}
                placeholder="Numero de parcelas"
            />

            <input 
                type="date"
                value={dataCompra}
                onChange={(evento) => setDataCompra(evento.target.value)}
            />

            <select value={cartaoId} onChange={(evento) => setCartaoId(evento.target.value)}>
                <option value="">Selecione o cartao</option>
                {cartoes.map((cartao) => <option key={cartao.id} value={cartao.id}>{cartao.nome}</option>)}
            </select>

            <select value={categoriaId} onChange={(evento) => setCategoriaId(evento.target.value)}>
                <option value="">Selecione a categoria</option>
                {categorias.map((categoria) => <option key={categoria.id} value={categoria.id}>{categoria.nome}</option>)}
            </select>

            <button type="submit">Registrar Compra</button>
            { erro && <p style={ { color: 'red' }}>{erro}</p>}
        </form>
    )
}

export default FormularioCompraCartao