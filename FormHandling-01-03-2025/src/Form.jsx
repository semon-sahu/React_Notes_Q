import { useState } from "react";


const Form=()=>{

     let [frmdata, setfrmdata]=useState("");

    function inpuchange(e){
        console.log(e.target.value);
        setfrmdata(e.target.value);

    }

    return(
        <>
         <input type="text" placeholder='Enter your name'  onChange={inpuchange}/><br />
         <input type="text" placeholder='Enter your age'  onChange={inpuchange}/><br />
         <input type="text" placeholder='Enter your email'  onChange={inpuchange}/><br />
         <input type="text" placeholder='Enter your id'  onChange={inpuchange}/><br />
         <input type="text" placeholder='Enter your address'  onChange={inpuchange}/><br />
         {frmdata}
        
        </>
    )
}
export default Form;