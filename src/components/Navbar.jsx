import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function Navbar({ darkmode }) {
  {/*Extraemos la funcion logout y iniciamos la navegacion */}
  const {logout } = useContext(AuthContext)
  const navigate = useNavigate();

  const avatarTemporal =
    "https://imgs.search.brave.com/PyP2k0vnjnNhgIg379nFuBkDusDP8pzUeIYYC6y2On4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L3ByZW1pdW0tcGhv/dG8vc2ltcGxpc3Rp/Yy1hdmF0YXItZGVz/aWduLWZlYXR1cmlu/Zy1mbGF0c3R5bGUt/cHJvZmlsZS1pY29u/LXVzZXItcmVwcmVz/ZW50YXRpb24tcGVy/ZmVjdF8xMjgzNTk1/LTEzMTM2LmpwZz9z/ZW10PWFpc19oeWJy/aWQmdz03NDAmcT04/MA";

  const [tituloinicial, setTituloinicial] = useState(false);

  useEffect(() => {
    const verificarPantalla = () => {
      setTituloinicial(window.innerWidth < 768);
    };
    verificarPantalla();

    window.addEventListener("resize", verificarPantalla);
    return () => window.removeEventListener("resize", verificarPantalla);
  }, []);

  // Función para manejar el clic en cerrar sesión y direccion
  const handleLogoutClick = () => {
    logout();
    navigate("/")
  }

  return (
    <header
      className={`w-full border-b shadow-sm transition-colors duration-300 ${
        darkmode ? "bg-slate-900 border-slate-800" : "bg-white border-gray-100"
      }`}
    >
      <section
        className={`flex justify-between items-center w-full max-w-md md:max-w-7xl mx-auto px-4 py-3 transition-colors duration-300 ${
          darkmode ? "bg-slate-900" : "bg-white"
        }`}
      >
        {/* GRUPO IZQUIERDO: Logo + Nombre */}
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            fill="white"
            className="bg-[#4a2ee8] p-1.5 rounded-lg w-8 h-8 shrink-0"
          >
            <path d="m226-559 78 33q14-28 29-54t33-52l-56-11-84 84Zm142 83 114 113q42-16 90-49t90-75q70-70 109.5-155.5T806-800q-72-5-158 34.5T492-656q-42 42-75 90t-49 90Zm155-121.5q0-33.5 23-56.5t57-23q34 0 57 23t23 56.5q0 33.5-23 56.5t-57 23q-34 0-57-23t-23-56.5ZM565-220l84-84-11-56q-26 18-52 32.5T532-299l33 79Zm313-653q19 121-23.5 235.5T708-419l20 99q4 20-2 39t-20 33L538-80l-84-197-171-171-197-84 167-168q14-14 33.5-20t39.5-2l99 20q104-104 218-147t235-24ZM157-321q35-35 85.5-35.5T328-322q35 35 34.5 85.5T327-151q-25 25-83.5 43T82-76q14-103 32-161.5t43-83.5Zm57 56q-10 10-20 36.5T180-175q27-4 53.5-13.5T270-208q12-12 13-29t-11-29q-12-12-29-11.5T214-265Z" />
          </svg>
          <span
            className={`font-bold text-lg tracking-tight transition-colors ${
              darkmode ? "text-white" : "text-slate-900"
            }`}
          >
            {tituloinicial ? "SaaSFlow" : "SaaS Dash"}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div
            className={`w-8 h-8 rounded-full overflow-hidden shrink-0 shadow-sm transition-colors ${
              darkmode
                ? "bg-slate-800 border-slate-700"
                : "bg-slate-100 border-gray-200"
            }`}
          >
            <img
              src={avatarTemporal}
              alt="Imagen del usuario"
              className="w-full h-full object-cover"
            />
          </div>
          <button
          onClick={handleLogoutClick}
            className={`flex items-center gap-1.5 text-sm font-semibold transition-colors cursor-pointer ${
              darkmode
                ? "text-slate-400 hover:text-white"
                : "text-gray-500 hover:text-slate-900"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="18px"
              viewBox="0 -960 960 960"
              width="18px"
              fill="currentColor"
              className={darkmode ? "text-slate-500" : "text-gray-400"}
            >
              <path d="M200-120q-33 0-56.5-23.5T120-200v-160h80v160h560v-560H200v160h-80v-160q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm220-160-56-58 102-102H120v-80h346L364-622l56-58 200 200-200 200Z" />
            </svg>
            Log Out
          </button>
        </div>
      </section>
    </header>
  );
}

export default Navbar;
