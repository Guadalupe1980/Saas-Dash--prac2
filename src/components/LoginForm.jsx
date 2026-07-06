import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Checkbox from "./ui/Checkbox";
import Button from "./ui/Button";

function LoginForm() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  // Estados locales para capturar los inputs
  const [inputUser, setInputUser] = useState("");
  const [inputPass, setInputPass] = useState("");
  const [esMobile, setEsMobile] = useState(false);

  useEffect(() => {
    const verificarPantalla = () => { setEsMobile(window.innerWidth < 768); };
    verificarPantalla();
    window.addEventListener("resize", verificarPantalla);
    return () => window.removeEventListener("resize", verificarPantalla);
  }, []);

  // Manejador del submit
  function handleSubmit(e) {
    e.preventDefault(); // Evitamos que recargue la página
    
    // Ejecutamos la función de login del contexto
    const exito = login(inputUser, inputPass);
    
    if (exito) {
      navigate("/home"); // Si coincide, redirige a Home directo
    }
  }

  return (
    <div className="w-full max-w-md mx-auto shadow-xl p-7 rounded-xl bg-white border border-gray-100">
      <div className="mb-6 flex flex-col justify-center items-center gap-2">
        {esMobile ? (
          <svg xmlns="http://www.w3.org/2000/svg" height="3rem" viewBox="0 -960 960 960" width="3rem" fill="#4a2ee8" className="bg-[#edeafd] p-1 rounded">
            <path d="m226-559 78 33q14-28 29-54t33-52l-56-11-84 84Zm142 83 114 113q42-16 90-49t90-75q70-70 109.5-155.5T806-800q-72-5-158 34.5T492-656q-42 42-75 90t-49 90Zm155-121.5q0-33.5 23-56.5t57-23q34 0 57 23t23 56.5q0 33.5-23 56.5t-57 23q-34 0-57-23t-23-56.5ZM565-220l84-84-11-56q-26 18-52 32.5T532-299l33 79Zm313-653q19 121-23.5 235.5T708-419l20 99q4 20-2 39t-20 33L538-80l-84-197-171-171-197-84 167-168q14-14 33.5-20t39.5-2l99 20q104-104 218-147t235-24ZM157-321q35-35 85.5-35.5T328-322q35 35 34.5 85.5T327-151q-25 25-83.5 43T82-76q14-103 32-161.5t43-83.5Zm57 56q-10 10-20 36.5T180-175q27-4 53.5-13.5T270-208q12-12 13-29t-11-29q-12-12-29-11.5T214-265Z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" height="3rem" viewBox="0 0 24 24" width="3rem" fill="white" className="bg-[#4a2ee8] p-2.5 rounded-xl shadow-sm">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        )}
        <h1 className="text-2xl font-bold text-slate-950">Welcome back</h1>
        <span className="text-gray-400 text-sm">Please enter your details to sign in</span>
      </div>

      {/* Conectamos el onSubmit con la función */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="id-user" className="block text-[14px] font-medium text-slate-700 mb-1">Username / Email</label>
          <input
            type="text"
            id="id-user"
            placeholder="jj300254@gmail.com..."
            value={inputUser}
            onChange={(e) => setInputUser(e.target.value)}
            className="border border-gray-200 p-2.5 rounded-lg w-full text-sm outline-none focus:border-indigo-500"
          />
        </div>

        <div className="relative">
          <div className="flex justify-between text-[14px] mb-1">
            <label htmlFor="Password" className="font-medium text-slate-700">Password</label>
            <span className="text-indigo-600 font-semibold cursor-pointer hover:text-indigo-500">Forgot password?</span>
          </div>
          <input
            type="password"
            id="Password"
            placeholder="••••••••"
            value={inputPass}
            onChange={(e) => setInputPass(e.target.value)}
            className="border border-gray-200 p-2.5 rounded-lg w-full text-sm outline-none focus:border-indigo-500"
          />
        </div>

        <div className="py-1">
          <Checkbox id="remember" label="Remember for 30 days" className="flex gap-10" />
        </div>

        {/* type="submit" para que lance el handleSubmit */}
        <Button type="submit" className="w-full text-white">
          Sign In &rarr;
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;