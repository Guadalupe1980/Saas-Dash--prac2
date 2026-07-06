import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const {user, login} = useContext(AuthContext)
    const [username, setUsername] = useState("  ")
    const navigate =useNavigate

    function handleSumit(e){
        e.preventDefault()
        login(username)
        if(user)
        {
            navigate("/home")
        }
    }


  return (
    <>
    
    
    </>
  )
}

export default Login;