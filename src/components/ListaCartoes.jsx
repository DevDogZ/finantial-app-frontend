import ListaScroll from './ListaScroll'

function ListaCartoes({ cartoes, aoDeletar }) {
  const moeda = (valor) => Number(valor || 0).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  if (cartoes.length === 0) {
    return (
      <div className="estado-vazio estado-vazio-lista">
        <span>▤</span>
        <strong>Nenhum cartão cadastrado</strong>
        <p>Cadastre um cartão para registrar suas compras.</p>
      </div>
    )
  }

  return (
    <ListaScroll>
      {cartoes.map((cartao) => (
        <li key={cartao.id} className="registro-card registro-cartao">
          <div className="cartao-visual">
            <span className="cartao-chip" />
            <span>FINANDOG</span>
          </div>

          <div className="registro-conteudo">
            <span className="registro-label">CARTÃO</span>
            <strong className="registro-titulo">{cartao.nome}</strong>
            <span className="registro-subtitulo">
              Fechamento dia {cartao.dia_fechamento}
            </span>
          </div>

          <div className="registro-valor">
            <span className="registro-label">LIMITE</span>
            <strong>{moeda(cartao.limite)}</strong>
          </div>

          <button
            type="button"
            className="botao-perigo"
            onClick={() => aoDeletar(cartao.id)}
          >
            Excluir
          </button>
        </li>
      ))}
    </ListaScroll>
  )
}

export default ListaCartoes
