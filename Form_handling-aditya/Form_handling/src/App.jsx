
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Frm from './Frm'
import Login from './Login'



function App() {

  return (
    <>
      <Routes>
        <Route path='/login' element={<Login/>}/>
          <Route index element={<Frm/>}/>
        
      </Routes>
      
    </>
  )
}

export default App
