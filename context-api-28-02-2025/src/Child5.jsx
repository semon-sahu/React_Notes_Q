
import React from 'react';
import { adata } from './Child1';


const Child5=()=>{
    return(
        <>

       <p> child 5</p>

    <adata.Consumer>


        {
                 (agein)=>{
                return(
                    <>

                    <h1>My age is {agein}</h1>
                </>
                )
            }
        }
    </adata.Consumer>
        
     
        
        </>
    )
}
export default Child5;