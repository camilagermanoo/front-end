import { useContext } from "react";
import { createContext } from "react";

const AuthContext = createContext();

function AuthProvider({children}) {
    const [usuario, setUsuario] = useState({})
    const [logado, setLogado] = useState(false)
    
    const login = (dados) => {
        setUsuario({nome: "José"})
        setLogado(true)
    }

    const logout = () => {
        setUsuario({})
        setLogado(false)
    }

    return (
        <AuthContext.Provider value={{ logado, setLogado}}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth () {
    return useContext (AuthContext)
}

export { useAuth, AuthProvider }






