import PageLayout from "../components/PageLayout";
import Card from "../components/Card";

function Faltas() {
  return (
    <PageLayout titulo="Minhas Faltas">
      <Card
        titulo="Faltas por Disciplina"
        itens={[
          "BI e Data Warehousing: 2 faltas",
          "Construção de Frontend: 1 falta",
          "Desenvolvimento de Backend: 0 faltas"
        ]}
      />
    </PageLayout>
  );
}

export default Faltas;
