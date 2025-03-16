
import axios from 'axios'
import { useEffect,useState } from 'react'
import './App.css'

function App() {
const{apidata,fatchapi}=useState([]);

useEffect(()=>{

  axios.get('http://localhost:3000/Employee')
   .then(res=>data)
})
  return (
    <>
     <h1>practice api data fatch</h1>

    </>
  )
}

export default App
