import './Home.css';
import './LoginUi.css';
import Footer_div from './Footer.js';
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function About() {
   
  return (
    <body>
    <div> 
       
          
  
          
           
         <div class="centered">  <h1>Welcome To The Accounting Application ! </h1><div className="app">
         <div className="title">
          <h3>About:</h3>
          <br></br>
        <p>An accounting application is a software program that captures and records all accounting transactions. It often divides functions into modules such as accounts payable, accounts receivable, inventory, and more. An accounting application may run on a locally managed set of hardware and networking equipment or rely on the expertise of a third-party-managed cloud-based infrastructure.</p> 
        </div>
    </div>

    
</div>
       
           
            <Footer_div />
        </div>
        </body>

    
  );
}

export default About;