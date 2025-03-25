import axios from "axios";
import { useEffect, useState } from "react";



const Api=()=>{


let [api1data,fatchapi1data]=useState([]);

useEffect(()=>{
    axios.get('http://localhost:3000/student')
    .then(res=>{
       fatchapi1data(res.data)
    })
})
    
    return(
        <>
      <table border={1}>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Grade</th>

            
        </tr>
      </table>
      {
        api1data.map((e)=>{
            return(
                <>
                <tr> 
                <td>{e.name}</td>
                <td>{e.age}</td>
                <td>{e.grade}</td>
                 </tr>
                </>
            )
        })
      }
        
        </>
    )
}
export default Api;