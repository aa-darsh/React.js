import React from "react";
import ReactStars from "react-rating-stars-component" ;

import './App.css';


function Star() {
  return (

     <>
     <div className="Star">
       
     <div className="Container" style={{margin:"10rem", paddingRight:"5rem"}}>
     <div className="form">
       <form>
         <label>
           <h2>Name:</h2>
          <input style={{padding:"10px 10px"}}
          type="text" 
          placeholder="Enter Your Name"
          name="name" />
         </label>
        </form>
       </div>

          <ReactStars
              size={40}
              isHalf={true}  
              />
    
            <button 
            style={{
              backgroundColor: "lightgreen", font: "2rem", display: "inline-block", boxShadow: "0 5px 10px", fontSize: "16px",
              margin: "10px 21px", padding: "5px 20px", display: "inline-block"
                  }} 
             onClick={() => alert('Thankyou for rating us.')}> Submit </button>
           </div>

     </div>
      
      
        </>

  

  );
}

export default Star;
