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
          <button style={{marginLeft:"2rem", color:"White", backgroundColor:"Green", display:"inline-block",
          cursor:"pointer",padding:"6px 7px;", fontSize:"1.3rem"}}> Home !</button>
          </NavLink>

         

         <NavLink  to="/star">  
          <button style={{marginLeft:"2rem", color:"White", backgroundColor:"Blue",display:"inline-block",
          cursor:"pointer",padding:"6px 7px;", fontSize:"1.3rem"}}> Rate Us !</button>
          </NavLink>
       
          <NavLink  to="/contact">  
          <button style={{marginLeft:"2rem", color:"White", backgroundColor:"Red", display:"inline-block",
          cursor:"pointer",padding:"6px 7px;", fontSize:"1.3rem"}}> Contact Us !</button>
          </NavLink>

          <NavLink  to="/about"> 
          <button  style={{marginLeft:"2rem", color:"White", backgroundColor:"Pink",  display:"inline-block",
          cursor:"pointer",padding:"6px 7px;", fontSize:"1.3rem"}} > About Us !</button>
          </NavLink>

       
      </div>
       
      </>
    );
}
export default Navbar;