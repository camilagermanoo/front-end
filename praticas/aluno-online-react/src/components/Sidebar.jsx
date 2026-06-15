import logo from '../assets/chapeu.svg';
import Menu from './Menu';
import { useAuth } from '../contexts/UseAuth';

function Sidebar(props) {
    const { logout } = useAuth();

    return (
        <aside className='w-[300px] bg-[#e9e9e9] h-screen fixed hidden md:block py-5 flex flex-col justify-between'>
      <div>
        <header className='flex items-center gap-3 px-5 mb-4'>
          <img className="m-2 h-[60px] w-[60px]" src={logo} alt="imagem logo" />
          <h1 className='m-0 text-[1.5rem] font-bold' >Aluno Online</h1>
        </header>
        <Menu navegaPara={props.navegaPara} />
      </div>
      <div className='px-5'>
        <button
          onClick={logout}
          className="w-full bg-[#303030] text-white font-semibold px-4 py-2 rounded-lg hover:bg-[#555] transition-colors cursor-pointer"
        >
          Sair
        </button>
      </div>
      </aside>
    );
}

export default Sidebar;