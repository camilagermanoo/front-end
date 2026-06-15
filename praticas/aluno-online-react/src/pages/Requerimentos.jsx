import { useNavigate } from "react-router";
import Main from "../components/Main";
import Tabela from "../components/Tabela";
import { useEffect, useState } from "react";
import { listarRequerimentos } from "../services/requerimentoService";

export default function Requerimentos() {
    const navigate = useNavigate();

    const colunas = [
        "Tipo de Requerimento",
        "Data de Solicitação",
        "Situação"
    ];

    const [dados, setDados] = useState([])

    useEffect(() => {
    async function carregarRequerimentos() {
      try {
        const requerimentos = await listarRequerimentos();

        const dadosFormatados = requerimentos.map((req) => [
          req.tipo,
          req.data,
          req.situacao,
        ]);

        setDados(dadosFormatados);
      } catch (erro) {
        console.log(erro);
      }
    }

    carregarRequerimentos();
  }, []);

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
