import { useAuth } from "../contexts/AuthContext";

export default function Topbar() {
  const { usuario } = useAuth();

  return (
    <header>
      <span>Aluno Online</span>
      {usuario && <span>Olá, {usuario.nome}</span>}
    </header>
  );
}
