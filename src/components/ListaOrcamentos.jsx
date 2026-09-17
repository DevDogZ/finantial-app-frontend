function ListaOrcamentos({ orcamentos, aoDeletar }) {
    return (
        <ul>
            {orcamentos.map((orcamento) => (
                <li key={orcamento.id}>
                    {orcamento.mes}/{orcamento.ano} - limite: R$ {orcamento.valor_limite}
                    <button onClick={() => aoDeletar(orcamento.id)}>Apagar</button>
                </li>
            ))}
        </ul>
    )
}

export default ListaOrcamentos