

import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import c1 from "../images/cup11.jpg"
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
          <p>I Have Tested Caffeine Coffee Many Times.Really Amazing To <br />
          Me.The Combination Was Very Good. One Thing is To Serve <br />
          Extraordianary Coffee With Caffeine.I Will Order From <br />
          Caffeine For Any Of My Coffee Needs.

       <h1><MdOutlineStarPurple500 /></h1>  
          
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default AboutUs