import { createContext, useState, useEffect } from "react";
import { login as loginService } from "../services/authService";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const usuarioSalvo = localStorage.getItem("usuario");

    if (token && usuarioSalvo) {
      setUsuario(JSON.parse(usuarioSalvo));
    }

    setCarregando(false);
  }, []);

  async function login(email, senha) {
    const { usuario, token } = await loginService(email, senha);

    localStorage.setItem("token", token);
    localStorage.setItem("usuario", JSON.stringify(usuario));

    setUsuario(usuario);
  }

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    setUsuario(null);
  }

  return (
    <AuthContext.Provider value={{ usuario, login, logout, carregando, estaLogado: !!usuario }}>
      {children}
    </AuthContext.Provider>
  );
}