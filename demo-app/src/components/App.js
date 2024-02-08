import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from './About';
import NavBar from './NavBar';
import Home from './Home';
// import Resources from './Resources';
import Quiz from './Quiz';
import Happy from './Happy';
import Sad from './Sad';
import Anger from './Anger';
import Fear from './Fear';
import Stress from './Stress';
import Footer from './Footer';

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
        <NavBar />
    {/* establishes routing between pages */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<About />} />
          <Route path="/Quiz" element={<Quiz />} />
          {/* <Route path="/Resources" element={<Resources />} /> */}
          <Route path="/Happy" element={<Happy />} />
          <Route path="/Sad" element={<Sad />} />
          <Route path="/Anger" element={<Anger />} />
          <Route path="/Stress" element={<Stress />} />
          <Route path="/Fear" element={<Fear />} />
        </Routes>
        <Footer/> 
    </Router>
  </div>

  );
}

export default App;

