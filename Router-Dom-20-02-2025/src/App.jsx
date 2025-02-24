import { Route, Routes } from 'react-router-dom';
import React from 'react';
import About from './component/About'
import Services from './component/Services'
import Home from './component/Home'
import './App.css'
import Layout from './component/Layout';
import Gallery from './component/Gallery';

function App() {
  

  return (
    <>

<Routes>
<Route path="/" element={<Layout/>}>
  <Route index element={<Home/>}/>
<Route  path="/about"  element={<About/>}/>
<Route  path="/services"  element={<Services/>}/>
  <Route path="/gallery" element={<Gallery/>}/>

 </Route>
</Routes>

</>
   
  )
}

export default App;



// ye teeno  apko react router dom ko install karte tyme mill jati hai 

// Browser RouterRoutes
// Routes
// Route