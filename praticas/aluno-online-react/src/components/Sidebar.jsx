import logo from '../assets/chapeu.svg';
import Menu from './Menu';

function Sidebar(props) {
    return (
        <aside className='w-[300px] bg-[#e9e9e9] h-screen fixed hidden md:block py-5'>
      <header className='flex items-center gap-3 px-5 mb-4'>
        <img className="m-2 h-[60px] w-[60px]" src={logo} alt="imagem logo" />
        <h1 className='m-0 text-[1.5rem] font-bold' >Aluno Online</h1>
      </header>
      <Menu navegaPara={props.navegaPara} />
      </aside>
    );
}

export default Sidebar;