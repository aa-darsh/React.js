import React from "react";
import { useState } from "react";
import ReactStars from "react-rating-stars-component" ;

import './App.css';


function Star() {

  const [name, setName] = useState('');
  
 
  return (

     <>
     
       
     <div className="Star">

    <div className="Container" style={{margin:"10rem", paddingRight:"5rem"}}>
   
     

       <div className="form">
       <form>
         <label>
           <h1> Please Enter Your Name :</h1>
          <input style={{padding:"10px 10px", paddingLeft:"5rem", fontSize:"25px",
                      paddingRight:"5rem", textAlign: "center"}}
          type="text" 
          placeholder="Enter Your Name" onChange={e => setName(e.target.value)}
          
         />
         </label>
        </form>
         <h1>WELCOME !!!</h1>
       </div>

       
       <div style={{marginLeft: "9rem"}}>
       <ReactStars
              size={40}
              isHalf={true} 
              />

       </div>

        
            <button 
            style={{
              backgroundColor: "lightgreen", font: "2rem", display: "inline-block", boxShadow: "0 5px 10px", fontSize: "16px",
              marginLeft: "11rem", padding: "5px 20px", display: "inline-block"
                  }} 
             onClick={() => alert("thankyou for rating us" + " " + name +".")}> Submit </button>
           </div>

     </div>
      
      
        </>

  


  );
}

export default Star;
