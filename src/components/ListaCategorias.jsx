function ListaCategorias({ categorias, aoDeletar }) {
  if (categorias.length === 0) {
    return (
      <div className="estado-vazio estado-vazio-lista">
        <span>◈</span>
        <strong>Nenhuma categoria cadastrada</strong>
        <p>Crie categorias para organizar suas movimentações.</p>
      </div>
    )
  }

  return (
    <ul className="lista-registros">
      {categorias.map((categoria) => (
        <li key={categoria.id} className="registro-card registro-categoria">
          <div className="registro-icone">◈</div>

          <div className="registro-conteudo">
            <span className="registro-label">CATEGORIA</span>
            <strong className="registro-titulo">{categoria.nome}</strong>
          </div>

          <button
            type="button"
            className="botao-perigo"
            onClick={() => aoDeletar(categoria.id)}
          >
            Excluir
          </button>
        </li>
      ))}
    </ul>
  )
}

export default ListaCategorias
