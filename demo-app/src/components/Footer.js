import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="row">
        <div className="col-md-6">
          <div className="footer-slogan">
            <img src="img/Emote.ico" alt="inside out characters"></img>
            <div>
              <h2>Emote.</h2>
              <p>What's your emotion?</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p><a href="email@something.com" aria-label="Email"><span className="material-icons">email</span>Email: emote@gmail.com</a></p>
            <p><a href="tel:123-456-7894" aria-label="Phone"><span className="material-icons">phone</span> Phone: 123-456-7890</a></p>
            <p>Emote. 2024</p>
          </div>
        </div>
      </div>
    </footer>
  )
}