import { useState } from "react";

function Home() {
  const [tarefas, setTarefas] = useState([]);

  const carregarDados = () => {
    const timeout = setTimeout(() => {
      setTarefas([
        { id: 1, nome: "Implementar Trabalho", situacao: "aberta" },
        { id: 2, nome: "Entregar Práticas", situacao: "pendente" },
        { id: 3, nome: "Revisar Conteudo", situacao: "aberta" },
        { id: 4, nome: "Assistir Video-aulas", situacao: "concluída" },
      ]);
    }, 3000);

    clearTimeout(timeout);
  };

  carregarDados();

  return (
    <>
      <h1>Página Principal</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tarefa</th>
            <th>Situação</th>
          </tr>
        </thead>
        <tbody>
          {tarefas.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nome}</td>
              <td>{item.situacao}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Home;
