import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from './About';
import NavBar from './NavBar';
import Home from './Home';
import Resources from './Resources';
import Quiz from './Quiz';

export function handleScroll() {
  window.scroll({
    top: document.body.offsetHeight,
    left: 0, 
    behavior: 'smooth',
  });
}

function App(props) {
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

export default App;

