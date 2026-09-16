function ListaOrcamentos({ orcamentos }) {
    return (
        <ul>
            {orcamentos.map((orcamento) => (
                <li key={orcamento.id}>
                    {orcamento.mes}/{orcamento.ano} - limite: R$ {orcamento.valor_limite}
                </li>
            ))}
        </ul>
    )
}

export default ListaOrcamentos