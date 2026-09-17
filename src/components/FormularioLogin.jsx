import { useState } from 'react'

function FormularioLogin({ aoEntrar, aoIrParaCadastro }) {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')
  const [carregando, setCarregando] = useState(false)
  const [mostrarSenha, setMostrarSenha] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setErro('')
    setCarregando(true)

    try {
      await aoEntrar(email, senha)
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
        <span className="auth-kicker">FINANÇAS PESSOAIS</span>
        <h1>Finanças da Casa</h1>
        <p>Entre para acompanhar sua vida financeira.</p>
      </div>

      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="login-email">E-mail</label>
          <input
            id="login-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu@email.com"
            autoComplete="email"
            required
          />
        </div>

        <div className="campo">
          <label htmlFor="login-senha">Senha</label>
          <div className="campo-senha">
            <input
              id="login-senha"
              type={mostrarSenha ? 'text' : 'password'}
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Digite sua senha"
              autoComplete="current-password"
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

        <button className="botao-principal auth-submit" type="submit" disabled={carregando}>
          {carregando ? 'Entrando...' : 'Entrar'}
        </button>
      </form>

      <div className="auth-separador">
        <span>ou</span>
      </div>

      <div className="auth-footer">
        <span>Ainda não possui uma conta?</span>
        <button
          type="button"
          className="botao-link"
          onClick={aoIrParaCadastro}
        >
          Criar uma conta
        </button>
      </div>
    </div>
  )
}

export default FormularioLogin
