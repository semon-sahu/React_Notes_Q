import axios from "axios";
import { useEffect, useState } from "react";

const App1=()=>{

  const[apidata1,setapidata1]=useState([]);

    useEffect(()=>{
      axios.get('http://localhost:3000/student')
      .then(res=>{
        setapidata1(res.data)

      })
    })
  
  return(
    <>
    <table border="1px">
<tr>
  <th>Name</th>
  <th>Age</th>
  <th>Grade</th>
</tr>

   {
      apidata1.map((e)=>{
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

    </table>
 
    
    </>
  )
}
export default App1;