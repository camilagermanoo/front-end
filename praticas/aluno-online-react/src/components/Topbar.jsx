import user from '../assets/avatar.svg';
import { useAuth } from '../hooks/UseAuth';

export default function Topbar(props) {
function Topbar(props) {
    const { usuario } = useAuth();

    return (
        <header className='flex justify-between items-center py-[26px]'>
          <h1 className='text-[2rem] font-bold m-4 mb-0'>{props.titulo}</h1>
            <div className='flex items-center gap-2 mr-4'>
                {usuario && (
                    <span className='text-sm text-gray-600 hidden md:block'>
                        {usuario.email}
                    </span>
                )}
                <img className="h-[70px] w-[70px]" src={user} alt="imagem avatar" />
            </div>
        </header>
    );
}
}
