function ListaCategorias({ categorias }) {
  return (
    <ul>
      {categorias.map((categoria) => (
        <li key={categoria.id}>{categoria.nome}</li>
      ))}
    </ul>
  )
}

export default ListaCategorias