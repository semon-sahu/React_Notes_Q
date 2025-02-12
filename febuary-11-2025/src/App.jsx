// import Navber from './Navbar'
import './App.css'
import Child from './Child'

function App() {

  let person={
    fname:"sachin",
    lname:"kumar",
    age:22
  }

function fun(a){
  return a+a;
}
  return (
    <>
     {/* <Navbar/> */}
 

      <h1 style={{color:"red"}}>WElCOME</h1>

      <h1>My first Name:{person.fname}</h1>
      <h1>last name:{person.lname}</h1>
      <h1>Age:{person.age}</h1>
     <h2>fun{(10)}
</h2>
<Child name="semon" age={25}/>

<Child  employid={456} designation="software developer"/>




   </>
  )
}

export default App;

//propes is a propeerty which is used to pass data from one component to another component
//its a combination of attributes and parameters 
//props parent to child data flow karta hai

//h.w destructruing of object and array

