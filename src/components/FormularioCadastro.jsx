import { useState } from 'react'

function FormularioCadastro({ aoCadastrar, aoVoltar }) {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')
  const [sucesso, setSucesso] = useState('')
  const [carregando, setCarregando] = useState(false)
  const [mostrarSenha, setMostrarSenha] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setErro('')
    setSucesso('')
    setCarregando(true)

    try {
      await aoCadastrar(nome, email, senha)

      setSucesso('Conta criada com sucesso! Agora faça login.')
      setNome('')
      setEmail('')
      setSenha('')
    } catch (e) {
      setErro(e.message)
    } finally {
      setCarregando(false)
    }
  }

  return (
    <div className="auth-card">
      <div className="auth-logo">
        <span>$</span>
      </div>

      <div className="auth-heading">
        <span className="auth-kicker">COMECE AGORA</span>
        <h1>Criar conta</h1>
        <p>Organize suas finanças em um só lugar.</p>
      </div>

      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="cadastro-nome">Nome</label>
          <input
            id="cadastro-nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Como podemos chamar você?"
            autoComplete="name"
            required
          />
        </div>

        <div className="campo">
          <label htmlFor="cadastro-email">E-mail</label>
          <input
            id="cadastro-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu@email.com"
            autoComplete="email"
            required
          />
        </div>

        <div className="campo">
          <label htmlFor="cadastro-senha">Senha</label>
          <div className="campo-senha">
            <input
              id="cadastro-senha"
              type={mostrarSenha ? 'text' : 'password'}
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Crie uma senha"
              autoComplete="new-password"
              required
            />
            <button
              type="button"
              className="botao-mostrar-senha"
              onClick={() => setMostrarSenha((valor) => !valor)}
              aria-label={mostrarSenha ? 'Ocultar senha' : 'Mostrar senha'}
            >
              {mostrarSenha ? 'Ocultar' : 'Mostrar'}
            </button>
          </div>
        </div>

        {erro && (
          <div className="mensagem mensagem-erro" role="alert">
            <span>!</span>
            <p>{erro}</p>
          </div>
        )}

        {sucesso && (
          <div className="mensagem mensagem-sucesso" role="status">
            <span>✓</span>
            <p>{sucesso}</p>
          </div>
        )}

        <button className="botao-principal auth-submit" type="submit" disabled={carregando}>
          {carregando ? 'Criando...' : 'Criar minha conta'}
        </button>
      </form>

      <div className="auth-separador">
        <span>já possui uma conta?</span>
      </div>

      <div className="auth-footer">
        <button
          type="button"
          className="botao-link"
          onClick={aoVoltar}
        >
          Voltar para o login
        </button>
      </div>
    </div>
  )
}

export default FormularioCadastro
