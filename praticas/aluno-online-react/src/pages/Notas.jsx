import PageLayout from "../components/PageLayout";
import Card from "../components/Card";

function Notas() {
  return (
    <PageLayout titulo="Minhas Notas">
      <Card
        titulo="Notas por Disciplina"
        itens={[
          "BI e Data Warehousing: 8.5",
          "Construção de Frontend: 7.0",
          "Desenvolvimento de Backend: 9.2"
        ]}
      />
    </PageLayout>
  );
}

export default Notas;
