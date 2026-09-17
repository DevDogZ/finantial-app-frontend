import ItemMeta from './ItemMeta'

function ListaMetas({ metas, aoContribuir, aoDeletar }) {
    return (
        <ul>
            {metas.map((meta) => (
                <ItemMeta key={meta.id} meta={meta} aoContribuir={aoContribuir} aoDeletar={aoDeletar} />
            ))}
        </ul>
    )
}
export default ListaMetas