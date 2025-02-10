
import './App.css'
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';

function App() {
  

  return (
    <>
<nav className='navbar'>
  <h1>Navbar</h1>
  <ui>
    <li>HOME</li>
    <li>ABOUT</li>
    <li>SERVICES</li>
    <li>CONTACT</li>

  </ui>
  
</nav>


<Home />
<About />
<Services />
<Contact />

    </>
  )
}

export default App
