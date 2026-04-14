
function Menu({ navegaPara }) {
  return (
    <nav>
      <ul>
        <li><a href="#" onClick={(e) => navegaPara(1)}></a>Dashboard</li>
        <li><a href="#" onClick={(e) => navegaPara(2)}></a>Notas</li>
        <li><a href="#" onClick={(e) => navegaPara(3)}></a>Faltas</li>
        <li><a href="#" onClick={(e) => navegaPara(4)}></a>Boletos</li>
        <li><a href="#" onClick={(e) => navegaPara(5)}></a>Requerimentos</li>
        <li><a href="#" onClick={(e) => navegaPara(0)}></a>Sair</li>
      </ul>
    </nav>
  )
}

export default Menu;