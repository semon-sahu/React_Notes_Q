import { useState } from "react";

const Form=()=>{

     let [frmdata, setfrmdata]=useState({
        name:"",
        email:"",
        Password:""
     })
     


    function inpchange(e){

        const {name,value}=e.target;
        setfrmdata({...frmdata,[name]:value});

        // console.log(e.target.value);
        // setfrmdata(e.target.value);

    }
    function finalsubmit(e){
        e.preventDefault();

        console.log(frmdata);
        localStorage.setItem('frmdata',JSON.stringify(frmdata));
    }

    return(
        <>


        <form action="" onSubmit={finalsubmit}>

        <label htmlFor="">UserName:</label>
         <input type="text" name="UserName" placeholder='Enter your name'  onChange={inpchange}/><br />

        <label htmlFor="">email:</label>
         <input type="text" name="email "placeholder='Enter your email'  onChange={inpchange}/><br />

        <label htmlFor="">Password:</label>
         <input type="text" name="Password" placeholder='Enter your Password'  onChange={inpchange}/><br />
         <input type="submit" />
         {/* {frmdata} */}
         </form>
        
        </>
    )
}
export default Form;




// localStorage =protocol, dom ,port ye3 hoti hai 
// ->setitem,getItem,removeItem,clear
// key value pair hoti hai data |string formate me hota hai