import { Routes, Route } from 'react-router'
import Layout from './layouts/Layout';

function App() {
  return (
    <Routes>
      <Route element={<Layout/>}>
       <Route path="/" element={<Home />}/>
       <Route path="/about" element={<About />}/>
       <Route path="/perfil" element={<Perfil />}/>
       <Route path="/settings" element={<Settings />}/>
       <Route path="*" element={<Erro404 />}/>
      </Route>
    </Routes>
  )
}

export default App;
