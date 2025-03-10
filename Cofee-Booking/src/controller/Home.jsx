
import React from 'react'
import i1 from '../images/cup11.jpg'
import i2 from '../images/images2.jpg'
import i3 from '../images/image3.avif'

function Home() {


  return (
    <>
   
    <div className="home">
<h1>Discover The <br />Art ofPerfeet <br />Coffee</h1>
<p>Exprience The Rich And Bold Flavours Of Our <br /> Exquisite Coffee Blend.Creafted To Awaken Your <br />Senses And Statrt Your Day Right</p>
<button className="btn1">Order Now </button>
<button className="btn2">Explore More</button>
<div  className="h3div">
<h3>50+</h3>
<p className='p1'>ITEMS OF COFFEE</p>
<h3>20+</h3>
<p className='p2'>Order Running</p>
<h3>2K+</h3>
<p className='p3'>Happy Customers</p>
</div>



</div>
<div className="imgdiv">
<img src={i1} alt="cup" className="img1" height={"500"} width={"600"}/>
</div>



<section className="sectionmainfull">
  {/* // This is the section where the content will be displayed the coffee heaven */}
<div className="section1">
    
  <img src={i2} alt="" height={500}  width={400}/>

  <div className='Coffee_Heaven'>
  <h1>Coffee Heaven</h1>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia eligendi porro <br /> laborum, quae aliquid, dolorem iusto nihil corporis tempore  deserunt tempora <br />Consequatur, tempore distinctio cummagni ullam at d</p>
<button>View All</button>
 </div>
</div>


<div className="jeansdiv">
  <div className='jeans'>
  <h1>Jeans Coffee</h1>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia eligendi porro <br /> laborum, quae aliquid, dolorem iusto nihil corporis tempore  deserunt</p>
  <button>View All</button>

  </div>
  <img src={i3} alt=""   height={500}  width={400}/>
</div>
</section>
    </>
  )
}

export default Home