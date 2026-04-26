import logo from '../assets/chapeu.svg';
import Menu from './Menu';

function Sidebar() {
    return (
      <aside>
        <header>
          <img src={logo} alt="imagem logo" />
          <h1>Aluno Online</h1>
        </header>
        <Menu />
      </aside>
    );
}

export default Sidebar;
