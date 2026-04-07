import user from '../assets/avatar.svg';

function Topbar() {
    return (
        <header>
        <h1>Olá, Aluno!</h1>
        <img src={user} alt="imagem avatar" />
      </header>
    );
}

export default Topbar;