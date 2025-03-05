import {useState} from "react";
import Pra from "./Pra";

import './App.css'

function App() {
  let[name,setName]=useState("")

  let [c,setc]=useState(0);

 
  function demo(){
    setName("Shazab");
  }

  function Inc(){
    setc(c+1);
  }
  function Dec(){
    if(c!=0)
    {
      setc(c-1);

    }
  }
  return (
    <>
  <h1>My name is {name}</h1>
  <button onClick={demo}>Tap</button>
  <br />

<h1>{c}</h1>
  <button onClick={Dec}>-</button>
  <button onClick={Inc}>+</button>
  <hr />


  <Pra/>

    </>
  )
}

export default App;



//hw real dom and virtual dom
//d/b function component class componnent  
//what is reconcilation 