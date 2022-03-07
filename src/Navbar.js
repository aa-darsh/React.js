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
       
      <div className="menu_style">

     <NavLink  to="/">  
     <button style={{marginLeft:"2rem", color:"blue"}}> Home !</button>
     </NavLink>

    <NavLink  to="/star">  
    <button style={{color:"red"}}> Rate Us !</button>
    </NavLink>

    <NavLink  to= "/contact">  
    <button style={{marginLeft:"2rem", color:"Green"}}> Contact Us !</button>
    </NavLink>

    <NavLink  to="/about">  
    <button style={{marginLeft:"2rem", color:"Maroon"}}> About Us !</button>
    </NavLink>


    </div>

        
       </>
    );
}
export default Navbar;