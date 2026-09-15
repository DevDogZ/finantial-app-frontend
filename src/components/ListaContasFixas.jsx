import ItemContaFixa from './ItemContaFixa'

function ListaContasFixas({ contasFixas, aoPagar, aoDesativar }) {
    return (
        <ul>
            {contasFixas.map((contaFixa) => (
                <ItemContaFixa
                    key={contaFixa.id}
                    contaFixa={contaFixa}
                    aoPagar={aoPagar}
                    aoDesativar={aoDesativar}
                />
            ))}
        </ul>
    )
}

export default ListaContasFixas