import React from "react";
import { handleScroll } from "./App";
import Button from 'react-bootstrap/Button';


//Renders the landing page for users
export default function About() {
  return (
    <div>
        <header>
            <div className="landing-headings">
            <h1>EMOTE.</h1>
            <p>blank
            </p>
            <Button aria-label="Scroll Down" className="scroll-button" variant="dark" onClick={handleScroll}>Scroll Down</Button>
            </div>
        </header>

        <section className="about-us">
            <div className="about-us__main">
                <div className="about-us__content">
                <h2>About Us</h2>
                <p>
                    <span>Emote.</span> insert something here
                </p>
                <p><span> blank </span> with <span>EMOTE.</span></p>
                </div>
            {/* <img src="img/about.jpeg" alt="group of 4 people (2 guys 2 girls) exercising on the workout mat."></img> */}
            </div>
        </section>
    </div>
  )
}