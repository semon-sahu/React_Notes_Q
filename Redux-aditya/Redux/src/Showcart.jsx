import React from "react";
import { useSelector } from "react-redux";
import { clearcart } from "./Cartslice";

const Showcart=()=>{
    let shdata=useSelector((store)=>store.cart.cartitems)
    return(
        <>
        <div>
            <button onClick={()=>clearcart()}>clear cart</button>
{
    shdata.map((e)=>{
        return<>
<h1>{e.name}</h1>        
<h1>{e.price}</h1>        
<img src="{e.pimg}" alt="" />       
        </>
    })
}
        </div>
        </>
    )
}
export default Showcart