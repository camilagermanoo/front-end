import { Routes, Route, Navigate } from 'react-router';
import Layout from './layouts/Layout';
import Dashboard from './pages/Dashboard';
import Notas from './pages/Notas';
import Faltas from './pages/Faltas';
import Boletos from './pages/Boletos';
import Requerimentos from './pages/Requerimentos';
import RequerimentoForm from './forms/RequerimentoForm';
import Login from './pages/Login';
import { useAuth } from './hooks/UseAuth';

function App() {
  const { autenticado } = useAuth();

  return (
    <Routes>
      {autenticado ? (
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="notas" element={<Notas />} />
          <Route path="faltas" element={<Faltas />} />
          <Route path="boletos" element={<Boletos />} />
          <Route path="requerimentos">
            <Route index element={<Requerimentos />} />
            <Route path="novo" element={<RequerimentoForm />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      ) : (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </>
      )}
    </Routes>
  );
}