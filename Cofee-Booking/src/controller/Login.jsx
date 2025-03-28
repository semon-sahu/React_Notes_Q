import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
const Login=()=>{
    const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with", { email, password });
    navigate("/dashboard");
  };

    return(
        <>
        <div className="loginform">  
        <form action="" onSubmit={handleSubmit}> 
            <label htmlFor="email">Email :</label>
            <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
  <br />
  <br />
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password"  value={password} onChange={(e) => setPassword(e.target.value)} required />
              <br />  <br />
       <input type="submit" id="submit" />
        </form>
         <p className="mt-4 text-center"  >Don't have an account? <Link to="/signup" className="text-blue-500">Sign Up</Link></p>
         </div>
        </>
    )
}
export default Login;