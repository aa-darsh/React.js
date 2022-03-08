import React from "react";
import './App.css';
import { Link } from "react-router-dom";

function Converted() {
  const [name, setName] = ('');
  
  return (

    <div className="Star">
       <form>
         <label>
           <h1> Please Enter Your Name :</h1>
          <input style={{padding:"10px 10px", paddingLeft:"5rem", fontSize:"25px",
                      paddingRight:"5rem", textAlign: "center"}}
          type="text" 
          placeholder="Enter Your Name" onChange={e => setName(e.target.value)}
          name="name"
         />
         </label>
        </form>
         <h1>WELCOME !!!</h1>
         
      <Link to="/">
         <button 
            style={{
              backgroundColor: "lightgreen", font: "2rem", display: "inline-block", boxShadow: "0 5px 10px", fontSize: "16px",
              margin: "10px 21px", padding: "5px 20px", display: "inline-block"
                  }}> Submit </button>
         </Link>
  </div>

  );
}

export default Converted;