
import './App.css'
import axios from 'axios'
import { useEffect  ,useState } from 'react'

function App() {

  let [apidata,setApi]=useState([]);


  useEffect(()=>{
    axios.get('http://localhost:3000/student')
    .then(res=>{
      setApi(res.data)

    });

  },[])
 

  return (
    <>
    <h1> api fatch using hooks </h1>

    {
    apidata.map((e)=>{return <h3>{e.name}<br></br>{e.age}<br></br>{e.city}<br></br>{e.profession}</h3>})
    }
   <br />
    </>
  )
}

export default App

// map method for dispaly fdata in table 

// promise three type= reject ,pending ,fulfilled
// fake api- JSONPlaceholder for fake api 