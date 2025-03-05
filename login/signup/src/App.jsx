import React from 'react'
import Frm from './Frm'
import { Router,Route,Routes } from 'react-router-dom'
import Login from './Login'
import './App.css'

function App() {
 

  return (
    <>

    <h1>hello</h1>
    <Routes>
      <Route index element={<Frm/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
  
    </>
  )
}

export default App
