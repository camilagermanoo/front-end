import InputEmail from "./InputEmail";
import InputSenha from "./InputSenha";
import InputSubmit from "./InputSubmit";
import { useState } from "react";
import { useAuth } from "../contexts/UseAuth";

function FormLogin({ navegaPara }) {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [emailErro, setEmailErro] = useState('');
    const [senhaErro, setSenhaErro] = useState('');

    const resetEmail = (e) => {
        setEmail(e.target.value);
        setEmailErro('');
    };

    const resetSenha = (e) => {
        setSenha(e.target.value);
        setSenhaErro('');
    };

    const travaSubmit = async (e) => {
        e.preventDefault();

        setEmailErro('');
        setSenhaErro('');

        let temErro = false;

        if (!email) {
            setEmailErro('Email é obrigatório');
            temErro = true;
        } else {
            const temArroba = email.includes("@");
            const temPonto = email.includes(".");
            const posicaoArroba = email.indexOf("@");
            const posicaoPonto = email.lastIndexOf(".");

            if (!temArroba || !temPonto) {
                setEmailErro('Email inválido');
                temErro = true;
            }
            else if (posicaoArroba === email.length - 1) {
                setEmailErro('Email inválido');
                temErro = true;
            }
            else if (posicaoPonto === email.length - 1) {
                setEmailErro('Email inválido');
                temErro = true;
            }
        }

        if (!senha) {
            setSenhaErro('Senha é obrigatória');
            temErro = true;
        } else if (senha.length < 6) {
            setSenhaErro('Senha deve ter no mínimo 6 caracteres');
            temErro = true;
        }

        if (!temErro) {
            try {
                await login(email, senha);
                navegaPara(1);
            } catch (erro) {
                setSenhaErro(erro.message || "Email ou senha inválidos");
            }
        }
    }

    return (
    <form onSubmit={travaSubmit} className="space-y-4">
        <InputEmail 
            email={email}
            erro={emailErro}
            mudaValor={resetEmail}
        />
        <InputSenha 
            senha={senha}
            erro={senhaErro}
            mudaValor={resetSenha}
        />
        <InputSubmit 
            texto="Entrar"
        />
    </form>
    );
}

export default FormLogin;