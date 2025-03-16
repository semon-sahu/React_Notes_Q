import './App.css'
import { Route,Routes} from 'react-router-dom'
import Home from './controller/Home'
import Menu from './controller/Menu'
import AboutUs from './controller/AboutUs'
import Facilities from './controller/Facilities'
import Layout from './controller/Layout'
function App() {


  return (
    <>
  
<Routes>
<Route path="/" element={<Layout/>}>
<Route index element={<Home/>}/>
<Route path="/menu" element={<Menu/>}/>
<Route path="/aboutUs" element={<AboutUs/>}/>
<Route path="/facilities" element={<Facilities/>}/>
</Route>
</Routes>
 
    </>
  )
}

export default App;

