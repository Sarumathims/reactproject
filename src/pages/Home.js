import './Home.css';

import Footer_div from './Footer.js';
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function Home() {
   
  return (
    
    <div> 
       
          
  
          
           
         <div class="centered">  <h1>Welcome To The Accounting Application ! </h1><br/>    <p>An accounting platform is an IT stack of technology designed specifically for you to build on top of it. IT platforms are designed to be tailored according to user needs. You'll have basic accounting system functions, but platforms also contain features with more advanced ways to control the overall system.</p>

    
</div>
       
           
            <Footer_div />
        </div>
    

    
  );
}

export default Home;