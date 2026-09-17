import ItemMeta from './ItemMeta'

function ListaMetas({ metas, aoContribuir, aoDeletar }) {
  if (metas.length === 0) {
    return (
      <div className="estado-vazio estado-vazio-lista">
        <span>◇</span>
        <strong>Nenhuma meta cadastrada</strong>
        <p>Defina um objetivo e acompanhe seu progresso.</p>
      </div>
    )
  }

  return (
    <ul className="lista-registros">
      {metas.map((meta) => (
        <ItemMeta
          key={meta.id}
          meta={meta}
          aoContribuir={aoContribuir}
          aoDeletar={aoDeletar}
        />
      ))}
    </ul>
  )
}

export default ListaMetas
