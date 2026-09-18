/**
 * Invólucro das listas com rolagem interna.
 *
 * O limite de itens visíveis é definido em CSS (App.css), por tipo de
 * lista, porque cada tipo de card tem uma altura diferente:
 *
 *   - .lista-registros (padrão)  -> 5 itens  (cards ~68px)
 *   - .lista-menor  (metas/dívidas) -> 3 itens (cards altos ~190px)
 *
 * A classe `lista-menor` é aplicada via prop `className`.
 */
function ListaScroll({ className = 'lista-registros', children }) {
  return (
    <ul className={`${className} lista-com-scroll`}>
      {children}
    </ul>
  )
}

export default ListaScroll
