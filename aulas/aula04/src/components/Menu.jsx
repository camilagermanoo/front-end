import { NavLink } from 'react-router'

function Menu() {
    return <nav>
        <ul>
            <li><NavLink href="/">Home</NavLink></li>
            <li><NavLink href="/perfil">Perfil</NavLink></li>
            <li><NavLink href="/settings">Configurações</NavLink></li>
            <li><NavLink href="/about">Sobre</NavLink></li>
        </ul>
    </nav>
}

export default Menu;
