import React from "react";
// import ReactStars from "react-rating-stars-component" ;
import { Link} from "react-router-dom";

import './App.css';
import './index.css';


function Contact() {
  return (

    <div className="Star">
         <h1 style={{fontFamily:"TimesNewRoman", fontStyle:"oblique"}}>Thankyou for chosing us, Please send us an email over  !!! </h1>
         {/* <p>support@gmail.com</p> */}
        <Link style={{fontSize:"2rem"}}> support@gmail.com </Link>   
    </div>
    
     

  );
}

export default Contact;
