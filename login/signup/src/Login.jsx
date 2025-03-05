import React, { useState } from "react";
const Login=()=>{
let [logindata,setlogindata]=useState({
    username:"",
    email:"",
    password:""

})
function lginp(e){
    let {name,value}=e.target;
    setlogindata({...logindata,[name]:value})

}

function loginfinal(e){
    e.preventDefault(); 
    if(signdata.username != logindata.username || signdata.password !=logindata.password){
        alert("user not forund")


    }
    else(
        navigator('/home')
    )

}
    return(
        <>
        <h1>Login Form</h1>
 <form action="" onSubmit={loginfinal}>
    <label htmlFor="">UserName:</label>
    <input type="text" onChange={lginp} name='username' /><br />
    <label htmlFor="">Email:</label>
    <input type="text" onChange={lginp} name='email' /><br />
    <label htmlFor="">Password:</label>
    <input type="text" onChange={lginp} name='password' /><br />

    <button type="submit">Submit</button> 
    </form>       
        </>
    )
}
export default Login;