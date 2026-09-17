import { useState } from 'react'

function FormularioLogin({ aoEntrar, aoIrParaCadastro }) {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setErro('')

    try {
      await aoEntrar(email, senha)
    } catch (e) {
      setErro(e.message)
    }
  }

  return (
    <div className="card">
      <h1>Finanças da Casa</h1>

      <h2>Entrar</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Senha</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>

        {erro && (
          <p style={{ color: 'red' }}>
            {erro}
          </p>
        )}

        <button type="submit">
          Entrar
        </button>
      </form>

      <button
        type="button"
        onClick={aoIrParaCadastro}
      >
        Criar uma conta
      </button>
    </div>
  )
}

export default FormularioLogin