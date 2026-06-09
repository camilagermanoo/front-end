import { useNavigate } from "react-router";
import Main from "../components/Main";
import Tabela from "../components/Tabela";

function Requerimentos() {
    const navigate = useNavigate();

    const colunas = [
        "Tipo de Requerimento",
        "Data de Solicitação",
        "Situação"];

    const dados = [
      ["Revisão de Menção", "15/12/2025", "Indeferido"],
      ["Dispensa de Disciplina", "12/06/2025", "Indeferido"],
      ["Trancamento de Matrícula", "05/01/2024", "Deferido"],
      ["Mudança de Turno", "10/10/2023", "Deferido"],
      ["Renovação de Matrícula", "10/02/2023", "Deferido"],
    ]

    return (
        <Main titulo="Meus Requerimentos" subtitulo="Faça solicitações online para a secretaria">
            <button
                className="self-start items-center gap-2 bg-[#303030] text-white font-semibold px-5 py-2 rounded-lg hover:bg-[#555] transition-colors cursor-pointer"
                onClick={() => navigate("/requerimentos/novo")}
            >
                ➕ Novo Requerimento
            </button>
            <Tabela colunas={colunas} dados={dados} />
        </Main>
    );
}
