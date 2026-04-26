import PageLayout from "../components/PageLayout";
import Card from "../components/Card";

function Dashboard() {
  return (
    <PageLayout titulo="Dashboard">
      <section>
        <Card
          titulo="Mural de Avisos"
          itens={[
            "Inscrição para o projeto de extensão",
            "Eleição para representante de turma"
          ]}
        />

        <Card
          titulo="Calendário Acadêmico"
          itens={[
            "23/02 - Início do período letivo 2026-1",
            "25/04 - Prazo final para aplicação da P1",
            "23/06 - Prazo final para aplicação da P2",
            "04/07 - Fim do período letivo 2026-1"
          ]}
        />

        <Card
          titulo="Minhas Disciplinas"
          itens={[
            "BI e Data Warehousing",
            "Construção de Frontend",
            "Desenvolvimento de Backend"
          ]}
        />
      </section>
    </PageLayout>
  );
}

export default Dashboard;
