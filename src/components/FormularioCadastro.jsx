import { useState } from 'react'

function FormularioCadastro({ aoCadastrar, aoVoltar }) {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')
  const [sucesso, setSucesso] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()

    setErro('')
    setSucesso('')

    try {
      await aoCadastrar(nome, email, senha)

      setSucesso(
        'Conta criada com sucesso! Agora faça login.'
      )

      setNome('')
      setEmail('')
      setSenha('')
    } catch (e) {
      setErro(e.message)
    }
  }

  return (
    <div className="card">
      <h1>Finanças da Casa</h1>

      <h2>Criar conta</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>

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

        {sucesso && (
          <p style={{ color: 'green' }}>
            {sucesso}
          </p>
        )}

        <button type="submit">
          Criar conta
        </button>
      </form>

      <button
        type="button"
        onClick={aoVoltar}
      >
        Voltar para login
      </button>
    </div>
  )
}

export default FormularioCadastro