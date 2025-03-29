import { Link } from "react-router-dom"
import  cup1 from "../images/cap1.webp";
import  cup2 from "../images/cap2.jpg";
import  cup3 from "../images/cap3.jpg";
import cup4 from "../images/black1.jpg";
import cup5 from "../images/black2.jpg";
import cup6 from "../images/capitino1.jpg";
import cup7 from "../images/capitino2.jpg";
import cup8 from "../images/cold1.jpg";
import cup9 from "../images/Cold2.avif";
import cup10 from "../images/cold3.jpg";



const Fullmenu=()=>{
    return(
        <>

            <h1 style={{color:"bisque"}}>Full Menu:-</h1>
            <div className="carddiv">

  <div className="card1">
    
    <img src={cup3} alt="cup1"height={300}  width={300}/>
    <div><h3>Cappuccino</h3><p>rate20</p></div>
   <Link to="/fullmenu"> <button> Order Now</button></Link>
  </div>
  <div className="card2">
    <img src={cup5} alt="cup2" height={300}  width={300}/>
    <h3>Espresso</h3>

   <Link to="/fullmenu"><button>Order Now</button></Link> 


  </div>
  <div className="card3">
    <img src={cup4} alt="cup3" height={300}  width={300}/>
      <h3>Americano</h3>
   <Link to="/fullmenu"><button>Order Now</button></Link> 
  </div>
 
   </div>
   <div className="carddiv">
  
  <div className="card1">
    <img src={cup1} alt="cup1"height={300}  width={300}/>
    <h3>Cappuccino</h3>
   <Link to="/fullmenu"> <button> Order Now</button></Link>
  </div>
  <div className="card2">
    <img src={cup6} alt="cup2" height={300}  width={300}/>
    <h3>Espresso</h3>
   <Link to="/fullmenu"><button>Order Now</button></Link> 


  </div>
  <div className="card3">
    <img src={cup7} alt="cup3" height={300}  width={300}/>
      <h3>Americano</h3>
   <Link to="/fullmenu"><button>Order Now</button></Link> 
  </div>
  
   </div>
   <div className="carddiv">
  
  <div className="card1">
    <img src={cup8} alt="cup1"height={300}  width={300}/>
    <h3>Cappuccino</h3>
   <Link to="/fullmenu"> <button> Order Now</button></Link>
  </div>
  <div className="card2">
    <img src={cup9} alt="cup2" height={300}  width={300}/>
    <h3>Espresso</h3>
   <Link to="/fullmenu"><button>Order Now</button></Link> 


  </div>
  <div className="card3">
    <img src={cup10} alt="cup3" height={300}  width={300}/>
      <h3>Americano</h3>
   <Link to="/fullmenu"><button>Order Now</button></Link> 
  </div>
  
   </div>
        
        </>
    )


}
export default Fullmenu;