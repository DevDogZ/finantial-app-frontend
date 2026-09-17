function Topbar({
  usuario,
  aoSair,
}) {

  return (
    <header className="topbar">

      <div className="topbar-esquerda">

        <div className="topbar-marca">
          <span className="topbar-marca-icone">
            $
          </span>

          <span>
            FinanDog
          </span>
        </div>

      </div>


      <div className="topbar-direita">

        {usuario && (
          <div className="usuario-info">

            <div className="usuario-avatar">
              {usuario.nome
                ?.charAt(0)
                .toUpperCase()}
            </div>

            <div className="usuario-dados">

              <strong>
                {usuario.nome}
              </strong>

              <span>
                {usuario.email}
              </span>

            </div>

          </div>
        )}


        <button
          className="botao-sair"
          onClick={aoSair}
          title="Sair"
        >
          ↪
          <span>Sair</span>
        </button>

      </div>

    </header>
  )
}


export default Topbar