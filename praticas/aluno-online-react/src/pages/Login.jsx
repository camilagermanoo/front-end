import { useState } from "react";
import { useAuth } from "../contexts/UseAuth";

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    login({ email, nome: email.split("@")[0] });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        required
      />
      <button type="submit">Entrar</button>
    </form>
  );
}