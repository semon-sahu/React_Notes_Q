



import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {

    const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signing up with", { email, password });
    navigate("/dashboard");
  };



    return (
        <div className="signupform">
            <h1  style={{color:"white"}}> Signup</h1>
             <form onSubmit={handleSubmit} className="space-y-4">
                <input  type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required  />
                <input   type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                <input type="submit" />
        </form>
        <p className="mt-4 text-center">Already have an account? <Link to="/login" className="text-blue-500">Login</Link></p>
        </div>
    )
}
export default Signup;