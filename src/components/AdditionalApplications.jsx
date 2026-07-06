function AdditionalApplications({ darkmode }) {
  return (
    <>
      <div
        className={`flex flex-col gap-4 w-full rounded-xl shadow-xl p-6 md:hidden transition-colors duration-300 ${
          darkmode ? "bg-slate-900 text-white" : "bg-white text-slate-950"
        }`}
      >
        <div className="flex items-center gap-3">
          <div
            className={`rounded-lg p-2.5 flex items-center justify-center shrink-0 ${
              darkmode ? "bg-slate-800" : "bg-f1f5f9"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill={darkmode ? "#94a3b8" : "#4b535c"}
            >
              <path d="M560-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM280-320q-33 0-56.5-23.5T200-400v-320q0-33 23.5-56.5T280-800h560q33 0 56.5 23.5T920-720v320q0 33-23.5 56.5T840-320H280Zm80-80h400q0-33 23.5-56.5T840-480v-160q-33 0-56.5-23.5T760-720H360q0 33-23.5 56.5T280-640v160q33 0 56.5 23.5T360-400Zm440 240H120q-33 0-56.5-23.5T40-240v-440h80v440h680v80ZM280-400v-320 320Z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <h1
              className={`font-semibold text-base sm:text-lg ${darkmode ? "text-white" : "text-slate-900"}`}
            >
              Billing
            </h1>
            <span
              className={`text-xs sm:text-sm leading-tight ${darkmode ? "text-slate-400" : "text-slate-500"}`}
            >
              Invoices and plans
            </span>
          </div>
        </div>
      </div>
      <div
        className={`flex flex-col gap-4 w-full rounded-xl shadow-xl p-6 md:hidden transition-colors duration-300 ${
          darkmode ? "bg-slate-900 text-white" : "bg-white text-slate-950"
        }`}
      >
        <div className="flex items-center gap-3">
          <div
            className={`rounded-lg p-2.5 flex items-center justify-center shrink-0 ${
              darkmode ? "bg-slate-800" : "bg-f1f5f9"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill={darkmode ? "#94a3b8" : "#4b535c"}
            >
              <path d="M560-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM280-320q-33 0-56.5-23.5T200-400v-320q0-33 23.5-56.5T280-800h560q33 0 56.5 23.5T920-720v320q0 33-23.5 56.5T840-320H280Zm80-80h400q0-33 23.5-56.5T840-480v-160q-33 0-56.5-23.5T760-720H360q0 33-23.5 56.5T280-640v160q33 0 56.5 23.5T360-400Zm440 240H120q-33 0-56.5-23.5T40-240v-440h80v440h680v80ZM280-400v-320 320Z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <h1
              className={`font-semibold text-base sm:text-lg ${darkmode ? "text-white" : "text-slate-900"}`}
            >
              API Keys
            </h1>
            <span
              className={`text-xs sm:text-sm leading-tight ${darkmode ? "text-slate-400" : "text-slate-500"}`}
            >
              Manage integrations
            </span>
          </div>
        </div>
      </div>
      <div
        className={`flex flex-col gap-4 w-full rounded-xl shadow-xl p-6 md:hidden transition-colors duration-300 ${
          darkmode ? "bg-slate-900 text-white" : "bg-white text-slate-950"
        }`}
      >
        <div className="flex items-center gap-3">
          <div
            className={`rounded-lg p-2.5 flex items-center justify-center shrink-0 ${
              darkmode ? "bg-slate-800" : "bg-f1f5f9"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill={darkmode ? "#94a3b8" : "#4b535c"}
            >
              <path d="M560-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM280-320q-33 0-56.5-23.5T200-400v-320q0-33 23.5-56.5T280-800h560q33 0 56.5 23.5T920-720v320q0 33-23.5 56.5T840-320H280Zm80-80h400q0-33 23.5-56.5T840-480v-160q-33 0-56.5-23.5T760-720H360q0 33-23.5 56.5T280-640v160q33 0 56.5 23.5T360-400Zm440 240H120q-33 0-56.5-23.5T40-240v-440h80v440h680v80ZM280-400v-320 320Z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <h1
              className={`font-semibold text-base sm:text-lg ${darkmode ? "text-white" : "text-slate-900"}`}
            >
              Team
            </h1>
            <span
              className={`text-xs sm:text-sm leading-tight ${darkmode ? "text-slate-400" : "text-slate-500"}`}
            >
              Meeting group
            </span>
          </div>
        </div>
      </div>

      {/*Tarjetas adicionales en modo Desktop */}
      <div className="hidden md:grid grid-cols-3 gap-4 w-full max-w-7xl mx-auto md:col-span-2">
        {/* Current Plan */}
        <div
          className={`flex items-center gap-3 p-5 rounded-xl shadow-xl w-full border transition-colors duration-300 ${
            darkmode
              ? "bg-slate-900 border-slate-800"
              : "bg-white border-gray-100"
          }`}
        >
          <div
            className={`p-2.5 rounded-full flex items-center justify-center shrink-0 w-11 h-11 ${
              darkmode
                ? "bg-emerald-950 text-emerald-400"
                : "bg-emerald-100 text-emerald-600"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
            >
              <path d="M880-720v480q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-220v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720ZM160-560h640v-160H160v160Zm320 200q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm-320 160h640v-200H602q-20 38-57 59t-65 21q-28 0-65-21t-57-59H160v200Z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Current Plan
            </span>
            <h1
              className={`font-bold text-base sm:text-lg ${darkmode ? "text-white" : "text-slate-800"}`}
            >
              Pro Monthly
            </h1>
          </div>
        </div>
        {/* Tarjeta 2: Storage Used */}
        <div
          className={`flex items-center gap-3 p-5 rounded-xl shadow-xl w-full border transition-colors duration-300 ${
            darkmode
              ? "bg-slate-900 border-slate-800"
              : "bg-white border-gray-100"
          }`}
        >
          <div
            className={`p-2.5 rounded-full flex items-center justify-center shrink-0 w-11 h-11 ${
              darkmode
                ? "bg-blue-950 text-blue-400"
                : "bg-blue-100 text-blue-600"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
            >
              <path d="M160-240q-33 0-56.5-23.5T80-320v-480q0-33 23.5-56.5T160-810h640q33 0 56.5 23.5T920-730v480q0 33-23.5 56.5T800-240H160Zm0-80h640v-400H160v400Zm120-80h400v-80H280v80Zm0-160h400v-80H280v80ZM160-320v-400 400Z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Storage Used
            </span>
            <h1
              className={`font-bold text-base sm:text-lg ${darkmode ? "text-white" : "text-slate-800"}`}
            >
              8.4 GB / 20 GB
            </h1>
          </div>
        </div>
        {/* Tarjeta 3: Security Level */}
        <div
          className={`flex items-center gap-3 p-5 rounded-xl shadow-xl w-full border transition-colors duration-300 ${
            darkmode
              ? "bg-slate-900 border-slate-800"
              : "bg-white border-gray-100"
          }`}
        >
          <div
            className={`p-2.5 rounded-full flex items-center justify-center shrink-0 w-11 h-11 ${
              darkmode
                ? "bg-amber-950 text-amber-400"
                : "bg-amber-100 text-amber-600"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
            >
              <path d="M480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-84q104-33 172-127t68-225v-196l-240-90-240 90v196q0 131 68 225t172 127Z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Security Level
            </span>
            <h1
              className={`font-bold text-base sm:text-lg ${darkmode ? "text-white" : "text-slate-800"}`}
            >
              Excellent
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
export default AdditionalApplications;
