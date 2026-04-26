import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function PageLayout({ titulo, children }) {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <main style={{ width: "100%" }}>
        <Topbar />
        <h2>{titulo}</h2>

        <section>
          {children}
        </section>
      </main>
    </div>
  );
}