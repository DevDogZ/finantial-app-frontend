import { useState } from 'react'

function FormularioTransacao({ aoCriar, contas, categorias }) {
  const [descricao, setDescricao] = useState('')
  const [valor, setValor] = useState('')
  const [tipo, setTipo] = useState('saida')
  const [data, setData] = useState('')
  const [contaId, setContaId] = useState('')
  const [categoriaId, setCategoriaId] = useState('')

  function handleSubmit(evento) {
    evento.preventDefault()

    aoCriar({
      descricao,
      valor: parseFloat(valor),
      tipo,
      data,
      conta_id: parseInt(contaId),
      categoria_id: parseInt(categoriaId),
    })

    setDescricao('')
    setValor('')
    setData('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={descricao}
        onChange={(evento) => setDescricao(evento.target.value)}
        placeholder="Descricao"
      />

      <input
        type="number"
        step="0.01"
        value={valor}
        onChange={(evento) => setValor(evento.target.value)}
        placeholder="Valor"
      />

      <select value={tipo} onChange={(evento) => setTipo(evento.target.value)}>
        <option value="saida">Saida</option>
        <option value="entrada">Entrada</option>
      </select>

      <input
        type="date"
        value={data}
        onChange={(evento) => setData(evento.target.value)}
      />

      <select value={contaId} onChange={(evento) => setContaId(evento.target.value)}>
        <option value="">Selecione a conta</option>
        {contas.map((conta) => (
          <option key={conta.id} value={conta.id}>
            {conta.nome}
          </option>
        ))}
      </select>

      <select value={categoriaId} onChange={(evento) => setCategoriaId(evento.target.value)}>
        <option value="">Selecione a categoria</option>
        {categorias.map((categoria) => (
          <option key={categoria.id} value={categoria.id}>
            {categoria.nome}
          </option>
        ))}
      </select>

      <button type="submit">Adicionar</button>
    </form>
  )
}

export default FormularioTransacao