import React from "react";
// import { useEffect, useState } from "react";
import "./App.css"
// import Star from "./Star"
// import Error from "./Error"
// import Main from "./Main"
import {Route,Switch, NavLink} from "react-router-dom";

function Navbar(){
    
    return(
       <>
       <div>
          <NavLink  to="/star">  
           <button style={{color:"red"}}> Rate Us !</button>
           </NavLink>
        
           <NavLink  to="/">  
           <button style={{marginLeft:"2rem", color:"blue"}}> Back !</button>
           </NavLink>

        
       </div>
        
       </>
    );
}
export default Navbar;