const BASE_URL = "http://localhost:3000/usuarios";

export async function login(email, senha) {
  const response = await fetch(`${BASE_URL}?email=${email}`);

  if (!response.ok) {
    throw new Error("Erro ao conectar com o servidor");
  }

  const usuarios = await response.json();

  if (usuarios.length === 0) {
    throw new Error("Usuário não encontrado");
  }

  const usuario = usuarios[0];

  if (usuario.senha !== senha) {
    throw new Error("Senha incorreta");
  }

  const token = btoa(`${usuario.email}:${Date.now()}`);

  const usuarioLogado = {
    id: usuario.id,
    nome: usuario.nome,
    email: usuario.email,
  };

  return { usuario: usuarioLogado, token };
}
