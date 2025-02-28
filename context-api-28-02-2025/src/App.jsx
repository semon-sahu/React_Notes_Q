import { createContext } from 'react'
import Child1 from './Child1'
import './App.css'




let cdata=createContext();
let name="Semon";

function App() {
  

  return (
    <>
    <h1>context api</h1>

    <cdata.Provider value={name}>
      <Child1/>

    </cdata.Provider>
    

    </>
  )
}

export default App
export {cdata}


//prpes dealing ke liye context api ka use kate hai 

//is me retha hai =create (jo file create kare)
// ,provide (jo file provide kare)
// ,consume,(jo file consume kare)
// useContext ye 3 no se chalta hai conyext api