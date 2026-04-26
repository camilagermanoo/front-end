function InputSenha({senha, erro, mudaValor}) {
    return (
    <div className="flex flex-col">
        <label htmlFor="senha" className="text-sm font-medium text-gray-700 mb-2">Senha</label>
        <input
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            id="senha"
            name="senha"
            value={senha}
            onChange={mudaValor}
        />
        {erro && <p className="text-red-600 text-sm mt-1">{erro}</p>}
    </div>
    );
}

export default InputSenha;
