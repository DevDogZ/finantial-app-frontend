import Sidebar from './Sidebar'
import Topbar from './Topbar'


function Layout({
  usuario,
  paginaAtual,
  aoMudarPagina,
  aoSair,
  children,
}) {
  return (
    <div className="layout">

      <Sidebar
        paginaAtual={paginaAtual}
        aoMudarPagina={aoMudarPagina}
      />

      <div className="layout-principal">

        <Topbar
          usuario={usuario}
          aoSair={aoSair}
        />

        <main className="conteudo-principal">
          {children}
        </main>

      </div>

    </div>
  )
}


export default Layout