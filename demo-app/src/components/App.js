import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import About from './components/About';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Resources from './components/Resources';
import Quiz from './components/Quiz';


export function handleScroll() {
  window.scroll({
    top: document.body.offsetHeight,
    left: 0, 
    behavior: 'smooth',
  });
}


export default function App(props) {
  return (
    <div>
      <Router>
      <NavBar aria-label="NavBar"/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<About />} />
          <Route path="/Quiz" element={<Quiz />} />
          <Route path="/Resources" element={<Resources />} />
        </Routes>
      </Router> 
    </div>
  );
}

export default App


