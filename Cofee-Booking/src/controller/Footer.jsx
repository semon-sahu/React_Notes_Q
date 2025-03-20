import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import c1 from "../images/cup11.jpg"


function Footer() {


  return (
    <>
    <hr style={{color:" bisque"}} />
    <div className="footer">
      <div className="div1f">
      <h1>Caffeine</h1>
<p>Enjoy Better ANd Better <br /> Quality Coffee With Caddeine.</p>
</div>

<div className="div2f">
  <h2>Contact Us</h2>
  <h4>Caffeine@Gmail.com</h4>
  <h4>Phone: </h4>
  <p>91+(321)562-57420</p>

  <p className="pname">39 Brooklyn street <br />covington, Va 24
  426</p>

</div>
<div  className="div3f">

  <img src={c1} alt="" height={150} width={300}/>
  <h3>Follow Us</h3>
  <div className="iconsf">
<FaInstagram />
<FaFacebook />
<FaTwitter />
<FaPinterest />
</div>

</div>

    </div>
    </>
  )
}

export default Footer;