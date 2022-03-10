import React from "react";
// import { useEffect, useState } from "react";
import "./App.css"
import Star from "./Star";
import Error from "./Error";
import Main from "./Main";
import Navbar from "./Navbar";
import Contact from "./Contact";
import About from "./About";
// import Name from "./Name";
import {Route,Switch, Link} from "react-router-dom";

function App() {
  

  return(

      <> 
      
     
      <Navbar />

     

      <Switch>
      
       <Route exact path="/" component={Main} />
       <Route  exact path="/star" component={Star} />
       <Route exact path="/contact" component={Contact}/>
       <Route exact path="/about" component={About}/>
       <Route  exact path="/navbar" component={Navbar} />
       {/* <Route exact path="/name" component={Name}/> */}
       <Route  component={Error}/>
       
     </Switch>
    
    
     </>
     
  );
}

export default App;
