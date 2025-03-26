

const Login=()=>{
    return(
        <>

        <div className="loginform">  

        <form action="">
            <label htmlFor="Fullname">Fullname:</label>
            
            <input type="text" name="username" id="username" required/>
            <br />
              <br />
                   <label htmlFor="Mobileno">Mobile No:</label>
            <input type="number" name="username" id="username" required/>
              <br />
            
              <br />
            <label htmlFor="email">Email :</label>
            <input type="email" name="email" id="email" required/>
  <br />
  <br />
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" required />

              <br />  <br />
            <button type="submit">Login</button>

        </form>

         </div>
        
        
        </>
    )
}
export default Login;