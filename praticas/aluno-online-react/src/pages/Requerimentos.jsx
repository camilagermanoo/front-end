import { Link } from "react-router-dom";

import PageLayout from "../components/PageLayout";
import Card from "../components/Card";

function Requerimentos() {
  return (
    <PageLayout titulo="Meus Requerimentos">
      <Link to="/requerimentos/novo">
        <button>
          Novo requerimento
        </button>
      </Link>

      <Card
        titulo="Status dos Requerimentos"
        itens={[
          "Declaração de matrícula - Em análise",
          "2ª via de boleto - Aprovado",
          "Histórico escolar - Concluído",
        ]}
      />
    </PageLayout>
  );
}

export default Requerimentos;