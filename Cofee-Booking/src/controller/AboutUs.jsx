

import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import c1 from "../images/customer1.jpg"
import c2 from "../images/customer2.jpg"
import c3 from "../images/customer3.jpg"
import { MdOutlineStarPurple500 } from "react-icons/md";




function AboutUs() {


  return (
    <>
 <div className="Aboutusdiv">
  <h1>What Our Customer Says</h1>
     

 </div>
  <Carousel>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img src={c1} alt="" height={200} width={200}/>
        <Carousel.Caption>
          <p>I Have Tested Caffeine Coffee Many Times.Really Amazing To 
          Me.The Combination Was Very Good. One Thing is To Serve <br />
          Extraordianary Coffee With Caffeine.I Will Order From <br />
          Caffeine For Any Of My Coffee Needs.
<br />
      <MdOutlineStarPurple500 /> 
      <MdOutlineStarPurple500 /> 
      <MdOutlineStarPurple500 /> 
      <MdOutlineStarPurple500 /> 
      <MdOutlineStarPurple500 /> 
      <h3>Anisa</h3>
          
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}

        <img src={c2} alt="" height={200} width={200} />
        <Carousel.Caption>

          
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia magnam accusamus animi reprehenderit veniam mollitia aliquid! Repellendus tempore voluptate nobis labore? Vitae a tenetur architecto voluptates mollitia beatae quaerat fugiat.</p>
          <br /> 
          <MdOutlineStarPurple500 /> 
      <MdOutlineStarPurple500 /> 
      <MdOutlineStarPurple500 /> 
      <MdOutlineStarPurple500 />
      <h2>Jack devil</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src={c3} alt="" height={200} width={200} />
        <Carousel.Caption>
        
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates fugiat molestiae explicabo, tenetur eaque nostrum beatae molestias voluptatum quibusdam repudiandae.
          </p>
          <br />      <MdOutlineStarPurple500 /> 
      <MdOutlineStarPurple500 /> 
      <MdOutlineStarPurple500 /> 
      <MdOutlineStarPurple500 /> 
      <MdOutlineStarPurple500 /> 
      <h3>Marcella</h3>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default AboutUs