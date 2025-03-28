
import { useContext } from 'react';
import React from 'react';
import { adata } from './Child1';

const Child5=()=>{
        {/* it a  usecontext hooks  */}
    let data=useContext(adata);

    return(
        <>     <p> child 5</p>

        {/* it a  usecontext hooks  */}

        <h1>my age is smonthing {data.name}and {data.contact}</h1>

{/* consumer ka use karte hai jab hume parent se data chahiye hota hai */}
    {/* <adata.Consumer>
        {
                 (agein)=>{
                return(
                    <>

                    <h1>My age is {agein}</h1>
                </>
                )
            }
        }
    </adata.Consumer>     */}
        </>
    )
}
export default Child5;