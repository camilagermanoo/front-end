function Menu({ navegaPara }) {
    return (
    <nav>
        <ul className="list-outside pl-5 m-0">
          <li className="list-disc my-4 ml-4">
            <a className="text-[#303030] no-underline px-2 py-2 block font-semibold text-lg" 
            href="#"
            onClick={() => navegaPara(1)}
            >Dashboard</a></li>
          
          <li className="list-disc my-4 ml-4">
            <a className="text-[#303030] no-underline px-2 py-2 block font-semibold text-lg" 
            href="#"
            onClick={() => navegaPara(2)}
            >Notas</a></li>
          
          <li className="list-disc my-4 ml-4">
            <a className="text-[#303030] no-underline px-2 py-2 block font-semibold text-lg" 
            href="#"
            onClick={() => navegaPara(3)}
            >Faltas</a></li>
          
          <li className="list-disc my-4 ml-4">
            <a className="text-[#303030] no-underline px-2 py-2 block font-semibold text-lg" 
            href="#"
            onClick={() => navegaPara(4)}
            >Boletos</a></li>
          
          <li className="list-disc my-4 ml-4">
            <a className="text-[#303030] no-underline px-2 py-2 block font-semibold text-lg" 
            href="#"
            onClick={() => navegaPara(5)}
            >Requerimentos</a></li>
          
          <li className="list-disc my-4 ml-4">
            <a className="text-[#303030] no-underline px-2 py-2 block font-semibold text-lg" 
            href="#"
            onClick={() => navegaPara(0)}
            >Sair</a></li>
        </ul>
      </nav>
      );
}

export default Menu;
