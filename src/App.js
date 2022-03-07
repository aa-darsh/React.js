import React from "react";
// import { useEffect, useState } from "react";
import "./App.css"
import Star from "./Star"
import Error from "./Error"
import Main from "./Main"
import Navbar from "./Navbar"
import {Route,Switch, Link} from "react-router-dom";

function App() {
  

  return(

      <> 
      
     
      <Navbar />

      <Switch>
      
       <Route exact path="/" component={Main} />
       <Route  exact path="/star" component={Star} />
       <Route  exact path="/navbar" component={Navbar} />
       <Route  component={Error}/>
       
     </Switch>
    
     </>
     
  );
}

export default App;