function Sidebar({
  paginaAtual,
  aoMudarPagina,
}) {

  const itens = [
    {
      id: 'dashboard',
      icone: '⌂',
      nome: 'Dashboard',
    },
    {
      id: 'transacoes',
      icone: '↕',
      nome: 'Transações',
    },
    {
      id: 'contas',
      icone: '▣',
      nome: 'Contas',
    },
    {
      id: 'categorias',
      icone: '◈',
      nome: 'Categorias',
    },
    {
      id: 'orcamentos',
      icone: '◎',
      nome: 'Orçamentos',
    },
    {
      id: 'metas',
      icone: '◇',
      nome: 'Metas',
    },
    {
      id: 'contas-fixas',
      icone: '□',
      nome: 'Contas Fixas',
    },
    {
      id: 'dividas',
      icone: '△',
      nome: 'Dívidas',
    },
    {
      id: 'cartoes',
      icone: '▤',
      nome: 'Cartões',
    },
  ]


  return (
    <aside className="sidebar">

      <div className="sidebar-logo">

        <div className="logo-icone">
          $
        </div>

        <div>
          <strong>𝓕𝓘𝓝𝓐𝓝𝓓𝓞𝓖</strong>
          <span>𝓕𝓘𝓝𝓐𝓝𝓒𝓔</span>
        </div>

      </div>


      <div className="sidebar-separador" />


      <nav className="sidebar-navegacao">

        <span className="sidebar-label">
          MENU
        </span>


        {itens.map((item) => (

          <button
            key={item.id}
            className={`sidebar-item ${
              paginaAtual === item.id
                ? 'sidebar-item-ativo'
                : ''
            }`}
            onClick={() => aoMudarPagina(item.id)}
          >

            <span className="sidebar-icone">
              {item.icone}
            </span>

            <span>
              {item.nome}
            </span>

          </button>

        ))}

      </nav>


      <div className="sidebar-footer">

        <div className="sidebar-status">
          <span className="status-ponto" />

          <span>
            Sistema online
          </span>
        </div>

      </div>

    </aside>
  )
}


export default Sidebar