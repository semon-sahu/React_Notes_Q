import { use, useState } from "react";


function color(){
 let [Bgcolor,setBgcolor]=useState("yellow")

const [tg,setTg]=useState(true)
    return(
        <>

        <div style={{height:"50vh",backgroundColor:Bgcolor}}>

<button onClick={()=>setBgcolor('red')} >RED</button>
<button onClick={()=>setBgcolor('green')} >green</button>
<button onClick={()=>setBgcolor('BLUE')} >BLUE</button>
<button onClick={()=>setBgcolor('BLACK')} >BLACK</button>
<button onClick={()=>setBgcolor('AQUA')} >AQUA</button>



        </div>
        {tg ? <h1>Hide the Comment  message</h1> : ""}
        
        {/* <button onClick={()=>setTg(false)}>HIDE</button>
        <button onClick={()=>setTg(true)}>show</button> */}
        <br />
        {tg ?  <button onClick={()=>setTg(!tg)}>hide</button> : <button onClick={()=>setTg(!tg)}>show</button>}
       
        {/* because of toggel we can do  both ting show and hide insingle click */}
     
        </>
    )
}
export default color