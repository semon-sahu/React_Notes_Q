import React from 'react';
import {cdata} from './App'
import Child3 from './Child3';

const Child2=()=>{

    return(
        <>
<cdata.Consumer>

    {
        (data)=>{
            return(
                <>
                <h1>My name is {data}</h1>
                </>
            )
        }
    }

</cdata.Consumer>
<Child3/>
        </>
    )
}
export default Child2;
// export {cdata}