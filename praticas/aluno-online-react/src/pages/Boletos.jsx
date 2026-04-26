import PageLayout from "../components/PageLayout";
import Card from "../components/Card";

export default function Boletos() {
  return (
    <PageLayout titulo="Boletos">
      <Card
        titulo="Situação dos Boletos"
        itens={[
          "Janeiro - Pago",
          "Fevereiro - Pago",
          "Março - Pendente"
        ]}
      />
    </PageLayout>
  );
}
