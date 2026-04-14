function InputSenha ({matricula, erro, mudaValor}) {
    return(
        <>
            <label htmlFor="matricula">Senha</label>
            <input
            className="border rounded-lg"
            type="number"
            id="matricula"
            value={matricula}
            name="matricula"
            onChange={mudaValor}
            />
            <p>{erro}</p>
        </>
    )
}