export default function Card({ titulo, itens }) {
  return (
    <article>
      <h3>{titulo}</h3>
      <ul>
        {itens.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
