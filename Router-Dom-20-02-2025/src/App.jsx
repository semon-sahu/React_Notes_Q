import { Route, Routes } from 'react-router-dom';
import React from 'react';
import About from './component/About'
import Services from './component/Services'
import Home from './component/Home'
import './App.css'

function App() {
  

  return (
    <>
   <h1 style={{alignItems:"center", backgroundColor:"aqua"}}>TOPIC-REACT-ROUTER-DOM</h1>

<Routes>
  <Route index element={<Home/>}/>

<Route  path="/about"  element={<About/>}/>
<Route  path="/services"  element={<Services/>}/>


</Routes>



    </>
  )
}

export default App;



// ye teeno  apko react router dom ko install karte tyme mill jati hai 

// Browser RouterRoutes
// Routes
// Route