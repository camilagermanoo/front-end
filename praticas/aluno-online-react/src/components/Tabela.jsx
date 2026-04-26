function Tabela(props) {
    return <section className="w-full border-1 border-[#e9e9e9]">
            {props.titulo && <h3 className="text-left text-xl font-bold px-3 py-2 bg-[#e9e9e9] border-b-2 border-[#e9e9e9] m-0">{props.titulo}</h3>}
            <table className="w-full border-collapse">
                <thead>
                    <tr className="text-left border-b-2 border-[#e9e9e9]">
                        {props.colunas.map((item, index) => (
                            <th className="bg-[#e9e9e9] font-bold px-3 py-2" key={index}>{item}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                        {props.dados.map((linha, i) => (
                            <tr key={i}>{linha.map((coluna, j) => 
                                (<td className="px-3 py-2 border-b border-[#f0f0f0]" key={j}>{coluna}</td>))}
                            </tr>
                        ))}
                </tbody>
            </table>
    </section>
}

export default Tabela;
