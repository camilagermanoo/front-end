function InputSenha ({senha, erro, mudaValor}) {
    return(
        <>
            <label htmlFor="senha">Senha</label>
            <input
            className="border rounded-lg"
            type="password"
            id="senha"
            value={senha}
            name="senha"
            onChange={mudaValor}
            />
            <p>{erro}</p>
        </>
    )
}