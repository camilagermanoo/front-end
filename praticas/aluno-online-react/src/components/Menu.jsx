import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <nav>
      <ul className="list-outside pl-5 m-0">
        <li className="list-disc my-4 ml-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-bold no-underline px-2 py-2 block text-lg"
                : "text-[#303030] no-underline px-2 py-2 block font-semibold text-lg"
            }
          >
            Dashboard
          </NavLink>
        </li>

        <li className="list-disc my-4 ml-4">
          <NavLink
            to="/notas"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-bold no-underline px-2 py-2 block text-lg"
                : "text-[#303030] no-underline px-2 py-2 block font-semibold text-lg"
            }
          >
            Notas
          </NavLink>
        </li>

        <li className="list-disc my-4 ml-4">
          <NavLink
            to="/faltas"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-bold no-underline px-2 py-2 block text-lg"
                : "text-[#303030] no-underline px-2 py-2 block font-semibold text-lg"
            }
          >
            Faltas
          </NavLink>
        </li>

        <li className="list-disc my-4 ml-4">
          <NavLink
            to="/boletos"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-bold no-underline px-2 py-2 block text-lg"
                : "text-[#303030] no-underline px-2 py-2 block font-semibold text-lg"
            }
          >
            Boletos
          </NavLink>
        </li>

        <li className="list-disc my-4 ml-4">
          <NavLink
            to="/requerimentos"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-bold no-underline px-2 py-2 block text-lg"
                : "text-[#303030] no-underline px-2 py-2 block font-semibold text-lg"
            }
          >
            Requerimentos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
