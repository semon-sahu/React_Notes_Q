import { useEffect, useState } from 'react'

import Make from './Make'
import './App.css'
import { Link, Route, Router, useNavigate } from 'react-router-dom'


function App() {
 

  // const navigate = useNavigate();

  const handleClick = () => {
    navigate('/make');
  };

  return (
    <>
<h1 className='h1a'>Welcome To Todo List</h1>


    {/* <Router> 
        <Route path="/make" element={<Make />} />
    </Router> */}

   <button className='but1' onClick={handleClick} > Make list</button>
   
<Make/>
    </>
  )
}

export default App

// onClick={handleClick}