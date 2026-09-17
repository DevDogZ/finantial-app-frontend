import { useEffect, useState } from 'react'
import { getSaldoConta } from '../api'

function ItemConta({ conta, aoDeletar }) {
  const [saldo, setSaldo] = useState(null)

  useEffect(() => {
    let ativo = true

    getSaldoConta(conta.id)
      .then((dados) => {
        if (ativo) setSaldo(dados.saldo_atual)
      })
      .catch(() => {
        if (ativo) setSaldo(null)
      })

    return () => {
      ativo = false
    }
  }, [conta.id])

  return (
    <li className="registro-card registro-conta">
      <div className="registro-icone registro-icone-conta">$</div>

      <div className="registro-conteudo">
        <span className="registro-label">CONTA</span>
        <strong className="registro-titulo">{conta.nome}</strong>
        <span className="registro-subtitulo">Saldo atual</span>
      </div>

      <div className="registro-valor">
        <strong>
          {saldo === null ? 'Carregando...' : `R$ ${Number(saldo).toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}`}
        </strong>
      </div>

      <button
        type="button"
        className="botao-perigo"
        onClick={() => aoDeletar(conta.id)}
      >
        Excluir
      </button>
    </li>
  )
}

export default ItemConta
