import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';




const Frm = () => {
    let [formdata,setformdata]=useState({
        username:"",
        email:"",
        password:""
    })

    let loginnav =useNavigate();

    function  inpchange(e){
        let {name,value}=e.target;
        setformdata({...formdata,[name]:value})
    }

    function finalsubmit(e){
        e.preventDefault();
        localStorage.setItem("userdata",JSON.stringify(formdata));
        loginnav('login')
    }


    return(
        <>
        <h1>Sign up page</h1>

        <form action="" onSubmit={finalsubmit}>
       <label htmlFor="">UserName:</label>
        <input type="text" name="username"  onChange={inpchange}/>
        <br />
          <label htmlFor="">Email:</label>
        <input type="text" name="email" onChange={inpchange} />
        <br />
          <label htmlFor="">Password:</label>
        <input type="text" name="password" onChange={inpchange}/>
        <br />
        <button type="submit">Submit</button>
        </form>

        
        </>
    )
}
export default Frm;