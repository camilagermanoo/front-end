const BASE_URL = "http://localhost:3000/requerimentos";

function getToken() {
  return localStorage.getItem("token");
}

function forcaLogout() {
  localStorage.removeItem("token");
  localStorage.removeItem("usuario");
  window.location.href = "/";
}

export async function listarRequerimentos() {
  const token = getToken();

  if (!token) {
    forcaLogout();
    throw new Error("Não autorizado");
  }

  const response = await fetch(BASE_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.status === 401) {
    forcaLogout();
    throw new Error("Sessão expirada");
  }

  if (!response.ok) {
    throw new Error("Erro ao buscar requerimentos");
  }

  return await response.json();
}

export async function cadastrarRequerimento(requerimento) {
  const token = getToken();

  if (!token) {
    forcaLogout();
    throw new Error("Não autorizado");
  }

  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(requerimento),
  });

  if (response.status === 401) {
    forcaLogout();
    throw new Error("Sessão expirada");
  }

  if (!response.ok) {
    throw new Error("Erro ao cadastrar requerimento");
  }

  return await response.json();
}