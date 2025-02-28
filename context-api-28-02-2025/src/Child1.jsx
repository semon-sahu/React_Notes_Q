import React from "react";
import Child2 from "./Child2";
import { createContext } from "react";



let adata=createContext();
let age=45;

const Child1=()=>{
    return(
        <>


<adata.Provider value={age}>


        <Child2/>

</adata.Provider>
        
        
        
        </>
    )
}
export default Child1;
export {adata}