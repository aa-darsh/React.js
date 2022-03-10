import { useEffect, useState } from 'react';
import Axios from 'axios';
import Dropdown from 'react-dropdown';
import { HiSwitchHorizontal } from 'react-icons/hi';
import 'react-dropdown/style.css';
// import ReactStars from 'react-rating-stars-component'
import React from "react";

import { Link } from "react-router-dom";

import "./App.css"
// import Star from "./Star"
// import './App.css';


function App() 
{
  // Initializing all the state variables 
  const [info, setInfo] = useState([]);
  const [name, setName] = useState("Hey User !");
  const [input, setInput] = useState(0);
  const [from, setFrom] = useState("inr");
  const [to, setTo] = useState("usd");
  const options = ["inr"];
  const [hi, setHi] = useState("-10");
  const negativeValue = ["-10", "-9", "-8", "-7", "-6", "-5", "-4", "-3", "-2", "-1"];
  const [bye, setBye] = useState("+10");
  const positiveValue = ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1"];
  const changeCountry=["usd", "eur"];
  const [output, setOutput] = useState(0);
  const [p, setP] = useState(1);
  const[q, setQ] = useState(-1);

  
  const hey = () => {

          alert("Hey !! ")          
  }

  

useEffect( () => {
  if (parseInt(input)>=100000) {
    alert("thats a large amount")    
  }
});

  const changeName =() =>
   {
    let val= name;

    if (val==="Hey User !") {
      setName("Nice To meet you !!")
    }else {
      setName("Hey User !")
    }
    
  }
   
  // Calling the api whenever the dependency changes
  useEffect(() => {
    Axios.get(
  `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`)
   .then((res) => {
      setInfo(res.data[from]);
    })
  }, [from]);
  
  // Calling the convert function whenever
  // a user switches the currency
  useEffect(() => {
    // setOptions(Object.keys(info));
    convert();
  }, [info])
    
  // Function to convert the currency
  function convert() {
    var rate = info[to];
    setOutput(input * rate);
  }
  
  // Function to switch between two currency
  function flip() {
    var temp = from;
    setFrom(to);
    setTo(temp);
  }
  
  useEffect(() => {  
     
    document.title = "currency converter";  
  });  

  return (
    
 <div className="App">
      <div className="heading">
        <h1 style={{ color: "red" }}>Currency Converter</h1>
      </div>

      {/* <div>
        <h1>{name}</h1>
      </div> */}

      <div>
      
       
       <h3>{name}</h3>

      </div>
        <div>
        <button
          style={{
            backgroundColor: "lightgreen", font: "2rem", display: "inline-block", boxShadow: "0 5px 10px", fontSize: "16px",
            margin: "4px 2px", padding: "5px 10px", cursor:"pointer"}}
          onClick={() => setName(changeName) }
          > Click Me ??
        </button>
        </div>
  
    

      <div className="amount">
        <h2> Enter Amount </h2>
      </div>

      <div className="container">

        <div className="negative">
          <Dropdown
            style={{ fontSize: "50px" }}
            options={negativeValue}
            onChange={(e) => { setQ(e.value); } }
            value={hi} />
        </div>

        <button
          style={{ margin: "30px", fontSize: "30px", cursor: "pointer", borderRadius: "5px" }}
          onClick={() => { setInput(parseInt(input) + parseInt(q)); } }> {q}
        </button>

        <input
          style={{ fontSize: 30, color: "Black", borderColor: "Green", textAlign: "center", cursor: "pointer", }}
          type="text"
          placeholder="Enter the amount"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onClick={hey} />

        <button style={{ fontSize: "30px", cursor: "pointer", borderRadius: "5px", margin: "30px" }}
          onClick={() => { setInput(parseInt(input) + parseInt(p)); } }>+{p}
        </button>

        <div className="positive">
          <Dropdown
            options={positiveValue}
            onChange={(e) => { setP(e.value); } }
            value={bye} />
        </div>
      </div>

      <div className="container">

        <div className="middle">
          <h2>From</h2>
          <Dropdown
            options={options}
            onChange={(e) => { setFrom(e.value); } }
            value={from}
            placeholder="From" />
        </div>

        <div className="switch">
          <HiSwitchHorizontal size="40px"
            onClick={() => { flip(); } } />
        </div>

        <div className="right">
          <h2>To</h2>
          <Dropdown
            options={changeCountry}
            onChange={(e) => { setTo(e.value); } }
            value={to}
            placeholder="To" />
        </div>

      </div>

      
      <div className="button">
        <button style={{cursor:"pointer"}}     
          onClick={() => { convert(); } }> Convert 
        </button>
      </div>

      <h3>Converted Amount:</h3>

      <div style={{fontSize:"2.5rem", fontStyle:"Italic"}}>
        {input + " " + from + " = " + output.toFixed(2) + " " + to}    
                  <Link to="/star">
                    <button style={{marginLeft:"1rem", color:"White",
                                   backgroundColor:"Red",cursor:"pointer",
                                   padding:"6px 7px;", fontSize:"1.3rem"}}> Submit
                     </button> 
                  </Link>     
      </div>
  </div>
    

 ); 
}  
export default App;
