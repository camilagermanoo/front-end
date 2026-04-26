export default function Card({ titulo, itens }) {
  return (
    <article className="border-2 border-[#e9e9e9] rounded-xl overflow-hidden mb-2">
      <h3 className="text-left px-5 py-3 font-bold text-lg bg-[#e9e9e9] border-b border-[#e9e9e9] m-0">{titulo}</h3>
      <ul className="flex flex-col list-none px-2 py-1 gap-3 m-0">
        {itens.map((item, index) => (
          <li className="text-left px-1 py-1" key={index}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
