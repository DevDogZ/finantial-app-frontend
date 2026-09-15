import ItemMeta from './ItemMeta'

function ListaMetas({ metas, aoContribuir }) {
    return (
        <ul>
            {metas.map((meta) => (
                <ItemMeta key={meta.id} meta={meta} aoContribuir={aoContribuir} />
            ))}
        </ul>
    )
}
export default ListaMetas