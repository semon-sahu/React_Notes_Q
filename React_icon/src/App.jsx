
import './App.css'
import { FaCarAlt } from "react-icons/fa";
import { FaSdCard } from "react-icons/fa";

import { FaIdCard } from "react-icons/fa";
import { GiCard10Diamonds } from "react-icons/gi";


function App() {
 

  return (
    <>
 <h1><FaCarAlt size={100} color='red'/> home</h1>
 <p> <FaCarAlt size={100}/> <FaSdCard style={{backgroundColor:"yellow", color:"aqua"}} size={100}/>
 
aour</p>
<GiCard10Diamonds size={100} />
<FaIdCard size={100}/>
    </>
  )
}

export default App
