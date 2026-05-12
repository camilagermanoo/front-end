import { useAuth } from "../contexts/AuthContext"
import { Routes, Route } from 'react-router'
import Layout from './layouts/Layout';

function App() {
  const { logado } = useContext(AuthContext)

  return (
    <Routes>
      <Route element={<Layout/>}>
       <Route path="/" element={<Home />}/>
       <Route path="/about" element={<About />}/>
       <Route path="/perfil" element={<Perfil />}/>
       <Route path="/settings/:id" element={<Settings />}/>
       <Route path="*" element={<Erro404 />}/>
      </Route>
      <Route path="/login" element={<Login/>}/>
    </Routes>
  )
}

export default App;
