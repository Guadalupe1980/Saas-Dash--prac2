import { useState, useEffect } from "react";
 
function AppPreferences({ esMobile, alternarModo, darkmode }) {
  return (
    // Agregamos dark:bg-slate-900 para que cambie el contenedor
<div className={`flex flex-col gap-6 w-full rounded-xl shadow-xl p-6 transition-colors duration-300 ${darkmode ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}`}>
      {/* Encabezado Principal */}
<article>
<div className="flex items-center gap-3 text-xl font-bold mb-2">
<div className={`${darkmode ? 'bg-indigo-950' : 'bg-[#edeafd]'} rounded-lg p-2.5 flex items-center justify-center`}>
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#4f46e5">
<path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z" />
</svg>
</div>
<div className="flex flex-col">
<h1 className={darkmode ? 'text-white' : 'text-slate-900'}>App Preferences</h1>
<span className={`font-normal text-[12px] hidden md:block ${darkmode ? 'text-slate-400' : 'text-slate-500'}`}>
              Customize your workspace experience
</span>
</div>
</div>
</article>
 
      {/* Sección: Appearance */}
<section className="flex items-center justify-between w-full rounded-lg gap-2">
<div className="flex flex-col">
<h2 className={`font-semibold text-base ${darkmode ? 'text-white' : 'text-gray-900'}`}>
            {esMobile ? "Appearance" : "Theme mode"}
</h2>
<span className={`text-xs sm:text-sm leading-tight ${darkmode ? 'text-slate-400' : 'text-slate-500'}`}>
            Switch between light and dark themes
</span>
</div>
 
        {/* Toggles de Light y Dark */}
<div className={`flex p-1 rounded-xl items-center shrink-0 ${darkmode ? 'bg-slate-800' : 'bg-slate-100'}`}>
          {/* Botón Light */}
<button 
            onClick={() => { if(darkmode) alternarModo(); }} 
            className={`flex items-center gap-1.5 px-2.5 py-1.5 font-medium text-xs sm:text-sm rounded-lg transition-all ${
              !darkmode 
                ? "bg-white text-gray-800 shadow-sm border border-gray-100" 
                : "text-slate-400 hover:text-slate-200"
            }`}
>
<svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="currentColor">
<path d="M565-395q35-35 35-85t-35-85q-35-35-85-35t-85 35q-35 35-35 85t35 85q35 35 85 35t85-35Zm-226.5 56.5Q280-397 280-480t58.5-141.5Q397-680 480-680t141.5 58.5Q680-563 680-480t-58.5 141.5Q563-280 480-280t-141.5-58.5ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z" />
</svg>
<span>Light</span>
</button>
 
          {/* Botón Dark -> ¡AQUÍ AGREGAMOS EL ONCLICK QUE FALTABA! */}
<button 
            onClick={() => { if(!darkmode) alternarModo(); }} 
            className={`flex items-center gap-1.5 px-2.5 py-1.5 font-medium text-xs sm:text-sm rounded-lg transition-all ${
              darkmode 
                ? "bg-slate-700 text-white shadow-sm border border-slate-600" 
                : "text-slate-500 hover:text-slate-800"
            }`}
>
<svg xmlns="http://www.w3.org/2000/xl" height="16px" viewBox="0 -960 960 960" width="16px" fill="currentColor">
<path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T440-660q0 90 63 153t153 63q52 0 98.5-24.5T831-534q3 13 4 26.5t1 27.5q0 150-105 255T480-120Zm0-80q116 0 198-82t82-198q0-8-.5-15t-1.5-15q-25 12-52.5 18t-57.5 6q-123 0-209.5-86.5T360-612q0-30 6-57.5t18-52.5q-7 1-15-1.5t-15-.5q-116 0-198 82t-82 198q0 116 82 198t198 82Zm-10-270Z" />
</svg>
<span>Dark</span>
</button>
</div>
</section>
 
      {/* Interface Language */}
<div className="flex justify-between">
<div className="flex gap-3">
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill={darkmode ? "#81819c" : "#b1b1bd"}>
<path d="M325-111.5q-73-31.5-127.5-86t-86-127.5Q80-398 80-480.5t31.5-155q31.5-72.5 86-127t127.5-86Q398-880 480.5-880t155 31.5q72.5 31.5 127 86t86 127Q880-563 880-480.5T848.5-325q-31.5 73-86 127.5t-127 86Q563-80 480.5-80T325-111.5ZM480-162q26-36 45-75t31-83H404q12 44 31 83t45 75Zm-104-16q-18-33-31.5-68.5T322-320H204q29 50 72.5 87t99.5 55Zm208 0q56-18 99.5-55t72.5-87H638q-9 38-22.5 73.5T584-178ZM170-400h136q-3-20-4.5-39.5T300-480q0-21 1.5-40.5T306-560H170q-5 20-7.5 39.5T160-480q0 21 2.5 40.5T170-400Zm216 0h188q3-20 4.5-39.5T580-480q0-21-1.5-40.5T574-560H386q-3 20-4.5 39.5T380-480q0 21 1.5 40.5T386-400Zm268 0h136q5-20 7.5-39.5T800-480q0-21-2.5-40.5T790-560H654q3 20 4.5 39.5T660-480q0 21-1.5 40.5T654-400Zm-16-240h118q-29-50-72.5-87T584-782q18 33 31.5 68.5T638-640Zm-234 0h152q-12-44-31-83t-45-75q-26 36-45 75t-31 83Zm-200 0h118q9-38 22.5-73.5T376-782q-56 18-99.5 55T204-640Z" />
</svg>
<p className={darkmode ? 'text-slate-200' : 'text-slate-800'}>Interface Language</p>
</div>
<select className={`font-semibold bg-transparent ${darkmode ? 'text-indigo-400' : 'text-blue-700'}`}>
<option value="" className={darkmode ? 'bg-slate-900' : 'bg-white'}>English (US)</option>
<option value="" className={darkmode ? 'bg-slate-900' : 'bg-white'}>Spanish</option>
</select>
</div>
 
      {/* Apartado de Notificaciones */}
<article className="flex justify-between items-center w-full gap-2">
<div className="flex items-center gap-3">
<svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill={darkmode ? "#94a3b8" : "#64748b"} className="shrink-0">
<path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q83 14 133 78.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z" />
</svg>
<div className="flex flex-col">
<h2 className={`font-semibold ${darkmode ? 'text-white' : 'text-gray-900'}`}>Email Notifications</h2>
<span className={`text-xs sm:text-sm md:hidden leading-tight ${darkmode ? 'text-slate-400' : 'text-slate-500'}`}>
              Receive weekly analytics reports
</span>
</div>
</div>
<svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 -960 960 960" width="36px" fill="#4f46e5" className="cursor-pointer shrink-0">
<path d="M280-240q-100 0-170-70T40-480q0-100 70-170t170-70h400q100 0 170 70t70 170q0 100-70 170t-170 70H280Zm0-80h400q66 0 113-47t47-113q0-66-47-113t-113-47H280q-66 0-113 47t-47 113q0 66 47 113t113 47Zm485-75q35-35 35-85t-35-85q-35-35-85-35t-85 35q-35 35-35 85t35 85q35 35 85 35t85-35Zm-285-85Z" />
</svg>
</article>
 
      {/* Botón inferior */}
<button className={`w-full mt-2 font-semibold text-sm py-2.5 rounded-xl border transition-all text-center hidden md:block ${
        darkmode 
          ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700' 
          : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
      }`}>
        Reset to Default
</button>
 
      {/* Apartado de 2FA */}
<article className="flex flex-col md:hidden">
<h3 className={`font-semibold ${darkmode ? 'text-white' : 'text-gray-900'}`}>
          Two-Factor Authentication
</h3>
<div className="flex justify-between items-center w-full gap-2">
<span className={`text-xs sm:text-sm ${darkmode ? 'text-slate-400' : 'text-slate-500'}`}>
            Secure your account with 2FA
</span>
<button className={`font-medium text-xs sm:text-sm px-3 py-1.5 rounded-lg border transition-all shrink-0 ${
            darkmode 
              ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700' 
              : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
          }`}>
            Enable
</button>
</div>
</article>
</div>
  );
}
 
export default AppPreferences