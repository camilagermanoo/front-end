import Topbar from './Topbar';

function Main(props) {
    return (
        <main className='flex flex-1 flex-col justify-center px-2 md:ml-[370px] md:mr-4 md:max-w-[800px]'>
            <Topbar titulo={props.titulo}/>
            <h2 className='text-left text-[1.75rem] font-bold ml-4 mb-6'>{props.subtitulo}</h2>
            <section className='flex flex-col gap-6'>
            {props.children}
            </section>
        </main>
    );
}

export default Main;
