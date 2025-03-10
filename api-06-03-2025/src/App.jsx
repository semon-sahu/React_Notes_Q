
import './App.css'
import axios from 'axios'
import { useEffect  ,useState } from 'react'

function App() {

  let [apidata,setApi]=useState([]);
  let [frmdata,setfrmdata]=useState([]);


  //delete function
function del(id){
  axios.delete(`http://localhost:3000/student/${id}`)
  .then(r=>alert("Data delete successfully"))
}

//onsert function

 function Insertinp(e){
  // axios.post('http://localhost:3000/student')
  const {name,value}=e.target
  setfrmdata({...frmdata,[name]:value})

  
     }



  useEffect(()=>{
    axios.get('http://localhost:3000/student')
    .then(res=>{
      setApi(res.data)
    });

  },[del])
 

  return (
    <>
    <h1> api fatch using hooks </h1>
{/* 
    {
    apidata.map((e)=>{return <h3>{e.name}<br></br>{e.age}<br></br>{e.city}<br></br>{e.profession}</h3>})

    } */}
    <table border="">
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
        <th>Contsct</th>
        <th>City</th>
        <th>delete</th>
      </tr>
      {
        apidata.map((e)=>{
          return( <>
          <tr>
            <td>{e.id}</td>
            <td>{e.name}</td>
            <td>{e.age}</td>
            <td>{e.city}</td>
            <td>{e.profession}</td>
            <td><button onClick={()=>del(e.id)}>Delete </button></td>
          </tr>
          </>
          )
        })
      }


    </table>
    <hr />
    <br />

<h1>Instrt form</h1>
    <form action="">
<label htmlFor="">Name:</label>
<input type="text" name="name"  onChange={Insertinp} /><br />

<label htmlFor="">age:</label>
<input type="text" name="age"onChange={Insertinp} /><br />

<label htmlFor="">city:</label>
<input type="text" name="city"onChange={Insertinp} /><br />

<label htmlFor="">profession:</label>
<input type="text" name="profession"onChange={Insertinp} /><br />

<input type="submit" name="" id="" />
    </form>
  
    </>
  )
}

export default App

// map method for dispaly fdata in table 

// promise three type= reject ,pending ,fulfilled
// fake api- JSONPlaceholder for fake api 