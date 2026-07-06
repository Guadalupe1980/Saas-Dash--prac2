import { useState } from "react";
import { createContext } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  function login(username, password) {
    const users = [
      { username: "Jose", email: "jose@gmail.com", password: "123" },
      { username: "Yaditzy", email: "yadi@gmail.com", password: "123456" },
      { username: "Diego", email: "diego@gmail.com", password: "11220" },
      {/*Profe su usuario creado para prueba */}
    ];

    let encontrado = false;

    for (const element of users) {
      if (element.username === username && element.password === password) {
        console.log("Usuario autenticado");
        setUser({ username: element.username }); // Guardamos el objeto del usuario
        encontrado = true;
        break;
      }
    }

    if (!encontrado) {
      alert("Credenciales incorrectas");
    }
    
    return encontrado;
  }

  {/*Limpia el estado del usuario, accion de cerrar secion */}
  function logout(){
    setUser(null);
    alert("Secion Cerrada")
  }

  const value = { user, setUser, login, logout };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };