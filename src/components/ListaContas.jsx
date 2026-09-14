function ListaContas( { contas }) {
    return (
        <ul>
            {contas.map((conta) => (
                <li key={conta.id}>
                    {conta.nome} - R$ {conta.saldo_inicial}
                </li>
            ))}
        </ul>
    )
}

export default ListaContas