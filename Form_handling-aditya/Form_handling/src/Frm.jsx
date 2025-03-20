import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Frm = () => {
    let [frmdata,setFrmdata] = useState({
      username:"",email:"",password:""
    })

    let Loginnav = useNavigate();

    // function inpchange(e){
    //     console.log(e.target.value);
    //     setFrmdata(e.target.value)
    // }

     function inpchange(e) {
      const {name,value} =e.target
       setFrmdata({...frmdata,[name]:value});
     }

     function finalsubmit(e){

         e.preventDefault()
         console.log(frmdata);
        localStorage.setItem("userdaata",JSON.stringify(frmdata))
        Loginnav("login")
     }

     
  return (
    <div>
      {/* {frmdata}
      <input type="text" placeholder="enter your name" onChange={inpchange} /> */}
      <div>
        <form action="" onSubmit={finalsubmit}>
          <label htmlFor="">Username</label>
          <input type="text" name="username" onChange={inpchange} />
          <br />

          <label htmlFor="">Email</label>
          <input type="text" name="email" onChange={inpchange} />
          <br />

          <label htmlFor="">Password</label>
          <input type="text" name="password" onChange={inpchange} />
          <br />

          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

export default Frm
