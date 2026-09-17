function ModalFormulario({
  aberto,
  kicker,
  titulo,
  descricao,
  aoFechar,
  children,
  tituloId,
}) {
  if (!aberto) return null

  return (
    <div
      className="modal-overlay"
      onMouseDown={(evento) => {
        if (evento.target === evento.currentTarget) {
          aoFechar()
        }
      }}
    >
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={tituloId}
      >
        <div className="modal-cabecalho">
          <div>
            <span className="modal-kicker">{kicker}</span>
            <h2 id={tituloId}>{titulo}</h2>
            <p>{descricao}</p>
          </div>

          <button
            type="button"
            className="modal-fechar"
            onClick={aoFechar}
            aria-label="Fechar"
          >
            ×
          </button>
        </div>

        <div className="modal-conteudo">
          {children}
        </div>
      </div>
    </div>
  )
}

export default ModalFormulario
