import { useState } from "react"

function FormLogin({navegaPara}) {
    const [matricula, setMatricula] = useState()
    const [senha, setSenha] = useState()
    const [matriculaErro, setMatriculaErro] = useState()
    const [senhaErro, setSenhaErro] = useState()

    const trataSubmit = (e) => {
        e.preventDefault()
        if (!matricula ) {
            console.log('Matrícula é obrigatório')
        }
        if (!senha) {
            console.log('Senha é obrigatório')
        }
        props.navegarPara(1)
    }

    return (
        <form onSubmit={trataSubmit}>
            <InputMatricula
            matricula={matricula}
            erro = {matriculaErro}
            mudaValor={(e) => setMatricula(e.target.value)}
            />
            <InputSenha
            senha={senha}
            erro={senhaErro}
            mudaValor={(e) => setSenha(e.target.value)}
            />
            <InputSubmit texto="entrar"/>
        </form>
        )
}
