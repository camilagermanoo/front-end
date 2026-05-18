import "./App.css";
import Dashboard from './pages/Dashboard';
import Boletos from './pages/Boletos';
import Faltas from './pages/Faltas';
import Notas from './pages/Notas';
import Requerimentos from './pages/Requerimentos';

export default function App() {
  const { autenticado } = useAuth();

  if (!autenticado) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/faltas" element={<Faltas />} />
      {/* adicione as demais rotas aqui */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
