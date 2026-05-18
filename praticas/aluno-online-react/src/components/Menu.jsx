import { useAuth } from "../contexts/AuthContext";

export default function Menu() {
  const { logout } = useAuth();

  return (
    <nav>
      <a href="/">Dashboard</a>
      <a href="/faltas">Faltas</a>
      <button onClick={logout}>Sair</button>
    </nav>
  );
}
