import ItemContaFixa from './ItemContaFixa'
import ListaScroll from './ListaScroll'

function ListaContasFixas({ contasFixas, aoPagar, aoDesativar }) {
  if (contasFixas.length === 0) {
    return (
      <div className="estado-vazio estado-vazio-lista">
        <span>□</span>
        <strong>Nenhuma conta fixa cadastrada</strong>
        <p>Cadastre despesas recorrentes para acompanhá-las.</p>
      </div>
    )
  }

  return (
    <ListaScroll>
      {contasFixas.map((contaFixa) => (
        <ItemContaFixa
          key={contaFixa.id}
          contaFixa={contaFixa}
          aoPagar={aoPagar}
          aoDesativar={aoDesativar}
        />
      ))}
    </ListaScroll>
  )
}

export default ListaContasFixas
