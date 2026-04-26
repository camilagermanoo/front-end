function InputEmail({email, erro, mudaValor}) {
    return (
    <div className="flex flex-col">
        <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2">E-mail</label>
        <input
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={mudaValor}
        />
        {erro && <p className="text-red-600 text-sm mt-1">{erro}</p>}
    </div>
    );
}

export default InputEmail;
