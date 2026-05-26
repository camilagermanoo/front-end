import user from '../assets/avatar.svg';

function Topbar(props) {
    return (
        <header className='flex justify-between items-center py-[26px]'>
        <h1 className='text-[2rem] font-bold m-4 mb-0'>{props.titulo}</h1>
        <img className="h-[70px] w-[70px] mr-4" src={user} alt="imagem avatar" />
      </header>
    );
}

export default Topbar;
