import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Profile from "./Pages/profile";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <>
    <AuthProvider>
    {/* <nav>
      <Link to={"/home"}>Home</Link>
      <Link to={"/login"}>Login</Link>
      <Link to={"/profile"}>Profile</Link>
    </nav> */}
      <Routes>
        <Route path="/" element={ <main className="min-h-screen w-full flex items-center justify-center bg-slate-50 p-4"><LoginForm /></main>} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route> 
      </Routes>
    </AuthProvider>
    </>
  );
}

export default App;