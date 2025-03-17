import { Route,Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import User from './User'
function App() {
 

  return (
    <>
<Routes>
<Route path="/" element={<Navbar/>}>
<Route index element={<Home/>}/>
{/* <Route path='/user/:name?/:age?' element={<User/>}/>  */}
<Route path='/user' element={<User/>}>
<Route path=':id' element={<User/>}/>

</Route>
</Route>
</Routes>
    </>
  )
}

export default App


//componenet life cycle  h/w
