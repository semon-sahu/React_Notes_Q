import Nav from './Controller/Nav'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Controller/Home'
import About from './Controller/About'
import Services from './Controller/Services'

function App() {
  

  return (
    <>
    <Nav/>
<Routes>
  
<Route index element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/services' element={<Services/>}/>

</Routes>
  

    </>
  )
}

export default App
