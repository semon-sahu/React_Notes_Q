import { useState } from "react";
const Login = () => {


      let [frmdata,setFrmdata] = useState({
          username:"",password:""
        })
        function logindata(e){

         e.preventDefault()
         console.log(frmdata);
         let z = localStorage.getItem("userdaata");
         z=JSON.parse(z);
         if(z.username==frmdata.username && z.password==frmdata.password)
         {
            alert("data save successfuly")
         }
         else{
            alert("please enter valid details")
         }
        
     }
      function inpchange(e) {
        const { name, value } = e.target;
        setFrmdata({ ...frmdata, [name]: value });
      }
  return (
    <div>
      <form action="" onSubmit={logindata}>
        <label htmlFor="">Username</label>
        <input type="text" name="username" onChange={inpchange} />
        <label htmlFor="">Password</label>
        <input type="text" name="password" onChange={inpchange} />

        <input type="submit" />
      </form>
    </div>
  );
}

export default Login
