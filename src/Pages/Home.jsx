import Navbar from "../components/Navbar";
import ProfileSettings from "../components/ProfileSettings";
import AppPreferences from "../components/AppPreferences";
import AdditionalApplications from "../components/AdditionalApplications";
import BottomNav from "../components/BottomNav";
import React, { useState, useEffect } from "react";

// ... (Tus imports se quedan igual)

function Home() {
  const [esMobile, setEsMobile] = useState(false);

  const [darkmode, setDarkmode] = useState(false);

  useEffect(() => {
    const verificarPantalla = () => {
      setEsMobile(window.innerWidth < 768);
    };

    verificarPantalla();

    window.addEventListener("resize", verificarPantalla);

    return () => window.removeEventListener("resize", verificarPantalla);
  }, []);

  function alternarModo() {
    setDarkmode(!darkmode);
  }

  return (
    <>
      <Navbar darkmode={darkmode}/>

      <section
        className={`p-4 sm:p-6 min-h-[calc(100vh-64px)] w-full flex flex-col items-center transition-colors duration-300 ${
          darkmode ? "bg-slate-950" : "bg-slate-50"
        }`}
      >
        <div className="w-full max-w-md md:max-w-7xl mb-5 mt-2 ">
          <h1
            className={`text-2xl font-bold md:text-3xl md:flex ${darkmode ? "text-white" : "text-slate-950"}`}
          >
            Welcome back
          </h1>
          <span className="text-gray-400 text-sm block md:hidden">
            Manage your account settings and preferences here
          </span>
          <span className="text-gray-400 text-sm hidden md:block">
            Here's what's happening with your workspace today
          </span>
        </div>

        <div className="flex flex-col gap-4 w-full max-w-md pb-10 md:max-w-7xl md:grid md:grid-cols-2">
          <ProfileSettings darkmode={darkmode}/>

          <AppPreferences
            esMobile={esMobile}
            darkmode={darkmode}
            alternarModo={alternarModo}
          />
          <AdditionalApplications darkmode={darkmode}/>
          <BottomNav darkmode={darkmode}/>
        </div>
      </section>
    </>
  );
}

export default Home;
