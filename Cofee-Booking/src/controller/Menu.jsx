import { Link } from "react-router-dom"
import  cup1 from "../images/cap1.webp";
import  cup2 from "../images/cap2.jpg";
import  cup3 from "../images/cap3.jpg";

function Menu() {


  return (
    <>

<div className="menuselling">

  <h1>Best Selling Items</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptatum sit cupiditate optio quae  nihil rem provident  <br />perferendis quis! Nulla aliquid reprehenderit rem harum sed quaerat officiis reiciendis error quidem.</p>

<li>
  <ul><Link   to="/fullmenu" style={{textDecoration:"none",color:"white", fontSize:"20px"}}>All</Link> </ul>
  <ul> <Link  style={{textDecoration:"none",color:"white", fontSize:"20px"}}> Black </Link></ul>
  <ul> <Link style={{textDecoration:"none",color:"white", fontSize:"20px"}}>Expresso</Link></ul>
  <ul><Link style={{textDecoration:"none",color:"white", fontSize:"20px"}}>Doppio</Link></ul>
</li>

<div className="carddiv">
  
  <div className="card1">
    <img src={cup1} alt="cup1"height={300}  width={300}/>
    <h3>Cappuccino</h3>
   <Link to="/fullmenu"> <button> Order Now</button></Link>
  </div>
  <div className="card2">
    <img src={cup2} alt="cup2" height={300}  width={300}/>
    <h3>Espresso</h3>
   <Link to="/fullmenu"><button>Order Now</button></Link> 


  </div>
  <div className="card3">
    <img src={cup3} alt="cup3" height={300}  width={300}/>
      <h3>Americano</h3>
   <Link to="/fullmenu"><button>Order Now</button></Link> 
  </div>
  
   </div>
</div>


    </>
  )
}

export default Menu;