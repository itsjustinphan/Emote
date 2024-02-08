import React from "react";
import { handleScroll } from "./App";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
// import insideOutLogo from './img/inside-out.jpeg';


//Renders the landing page for users
export default function Home() {
 return (
   <div>
       <header>
           <div className="landing-headings">
           <h1>Emote.</h1>
           <h2>Take a quiz and see how you are currently feeling.</h2>
           <h3>DISCLAIMER: This quiz is NOT a diagnosis!</h3>
           <img src='/img/inside-out.jpeg' className="Home-image" alt="insideOut-logo"></img> 
          </div>
       </header>
   </div>
 )
}
