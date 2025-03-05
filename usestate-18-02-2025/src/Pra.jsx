import { useState } from "react";
import c1 from"./img/images.jpg";
const Pra=()=>{
let [name,sname]=useState("");

function demo(){
    sname("semon the bang");
    <img src={c1}  />

}
    return(
        <>
        <h1>Practice use state</h1>

      <h2>my official name is :{name}</h2>
      <button onClick={demo}>click here to show the data </button>
        
        </>
    )
}
export default Pra;