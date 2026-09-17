import ItemConta from './ItemConta'

function ListaContas({ contas, aoDeletar }) {
  if (contas.length === 0) {
    return (
      <div className="estado-vazio">
        <div className="estado-vazio-icone">
          $
        </div>

        <strong>Nenhuma conta cadastrada</strong>

        <p>
          Adicione sua primeira conta para começar a acompanhar seus saldos.
        </p>
      </div>
    )
  }

  return (
    <div className="lista-registros">
      {contas.map((conta) => (
        <ItemConta
          key={conta.id}
          conta={conta}
          aoDeletar={aoDeletar}
        />
      ))}
    </div>
  )
}

export default ListaContas