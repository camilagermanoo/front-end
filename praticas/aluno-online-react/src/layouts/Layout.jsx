import { Outlet } from "react-router-dom";
import Menu from "../components/Menu";

function Layout() {
  return (
    <div className="flex">
      <Menu />

      <main className="p-5 w-full">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;