import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    BrowserRouter,
    Link,
    Routes,
  } from "react-router-dom";
  
  
import "../Assets/css/style.css";
import "../Assets/css/bootstrap.css";
import "../Assets/css/responsive.css";
import "../Assets/css/style.css.map";
import About from '../components/About';
import How from '../components/How';
import Wallet from '../components/Wallet';
import Login from '../components/Login';
import SignUp from '../components/Signup';
import Dashboard from '../components/Dashboard';
import Home from '../components/Home';

const Rroutes = () => {
  return (
    <div>

                
        <div>
         <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/How" element={<How/>} />
           <Route path="/About" element={<About/>} />
           <Route path="/Login" element={<Login/>} />
           <Route path="/SignUp" element={<SignUp/>} />
           <Route path="/Wallet" element={<Wallet/>} />
           <Route path="/Dashboard" element={<Dashboard/>} />
         </Routes>
       </div>


    </div>
  )
}

export default Rroutes;