function ProfileSettings({ darkmode }) {
  return (
    <div
      className={`flex flex-col gap-4 w-full rounded-xl shadow-xl p-6 transition-colors duration-300 ${
        darkmode ? "bg-slate-900 text-white" : "bg-white text-slate-950"
      }`}
    >
      {/* Encabezado */}
      <div className="flex items-center gap-3 text-xl font-bold mb-2">
        <div
          className={`${darkmode ? "bg-indigo-950" : "bg-[#edeafd]"} rounded-lg p-2.5 flex items-center justify-center`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.5rem"
            viewBox="0 -960 960 960"
            width="1.5rem"
            fill="#4f46e5"
          >
            <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-32q0-34 17.5-62.5T224-298q62-31 126-46.5T480-360q66 0 130 15.5T736-298q29 15 46.5 43.5T800-192v32H160Z" />
          </svg>
        </div>
        <div className="flex flex-col">
          <span className={darkmode ? "text-white" : "text-slate-900"}>
            Profile Settings
          </span>
          <span
            className={`text-[12px] font-normal hidden md:block ${darkmode ? "text-slate-400" : "text-slate-500"}`}
          >
            Manage your public identity
          </span>
        </div>
      </div>

      {/* Inputs - Campo Nombre */}
      <div className="flex flex-col gap-1">
        <label
          className={`text-sm font-medium block md:hidden ${darkmode ? "text-slate-300" : "text-slate-700"}`}
        >
          Full Name
        </label>
        <label
          className={`text-sm font-medium hidden md:block ${darkmode ? "text-slate-300" : "text-slate-700"}`}
        >
          Display Name
        </label>
        <input
          type="text"
          name="texto"
          id="texto"
          placeholder="Jose Guadalupe ..."
          className={`shadow-sm p-2 rounded-lg outline-none w-full border transition-colors ${
            darkmode
              ? "bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
              : "bg-white border-gray-200 text-slate-900 placeholder:text-gray-400"
          }`}
        />
      </div>

      {/* Inputs - Campo Email */}
      <div className="flex flex-col gap-1">
        <label
          className={`text-sm font-medium ${darkmode ? "text-slate-300" : "text-slate-700"}`}
        >
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="jj300254@gmail.com"
          className={`shadow-sm p-2 rounded-lg outline-none w-full border transition-colors ${
            darkmode
              ? "bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
              : "bg-white border-gray-200 text-slate-900 placeholder:text-gray-400"
          }`}
        />
      </div>

      {/* Botón */}
      <div className="text-end mt-2">
        <button className="p-2 w-full max-w-40 rounded-lg bg-indigo-700 hover:bg-indigo-800 text-white font-medium text-sm transition-colors shadow-sm">
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default ProfileSettings;
