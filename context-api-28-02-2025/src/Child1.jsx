import React from "react";
import Child2 from "./Child2";
import { createContext } from "react";



let adata=createContext();
let ob={name:"semon sahu",contact:9752167422}

const Child1=()=>{
    return(
        <>


<adata.Provider value={ob}>
        <Child2/>

</adata.Provider>
        
        
        
        </>
    )
}
export default Child1;
export {adata}