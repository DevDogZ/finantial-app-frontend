function ListaCategorias({ categorias, aoDeletar }) {
  return (
    <ul>
      {categorias.map((categoria) => (
        <li key={categoria.id}>
          {categoria.nome}
          <button onClick={() => aoDeletar(categoria.id)}>Apagar</button>
        </li>
      ))}
    </ul>
  )
}

export default ListaCategorias