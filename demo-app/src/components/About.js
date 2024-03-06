import React from "react";
import { handleScroll } from "./App";
import Button from 'react-bootstrap/Button';

//Renders the landing page for users
export default function About() {
  return (
    <div className="full-height">
      <header>
        <div className="about-page">
            <div className="row">
              <div className="col-md-6">
                <img src='/img/inside-out.jpeg' className="Home-image" alt="insideOut-logo"></img> 
              </div>
              <div className="col-md-6">
              <h2>About Us</h2>
              <p>Welcome to Emote, where our commitment to UN Sustainable Development Goal 3: Good Health and Well-Being drives our mission to streamline the process for University of Washington students to comprehensively evaluate and enhance their mental well-being across various dimensions. In response to global health inequalities exacerbated by crises like the post-COVID-19 pandemic, our web application aims to bridge the gap by providing accessible mental health guidance, emphasizing the importance of equitable access to healthcare for all students, regardless of their background. Inspired by the SDG's commitment to end epidemics and promote universal health coverage, we believe that prioritizing health, including mental health, is a collective responsibility crucial for fostering healthy lives and well-being. With statistics revealing the prevalence of mental health challenges among college students, Emote introduces an innovative mental health check-in, featuring a personalized quiz to assess current emotions. Based on the quiz results, our platform provides tailored suggestions, resources, guidelines, and activities, offering support to boost morale and address mental health concerns. Join us in this collective journey towards a healthier and more resilient campus community, where promoting overall well-being is central to our mission.</p>
              </div>
            </div>
          <div className="row">
            <div className="col-md-6">
              <h2>Mission Statement</h2>
              <p>At Emote, our mission is to empower University of Washington students in their journey towards optimal mental well-being. Aligned with the UN Sustainable Development Goal 3: Good Health and Well-Being, we aim to address global health inequalities heightened by crises like the post-COVID-19 pandemic. Through our user-friendly platform, we leverage technology to streamline the evaluation and enhancement of mental health, ensuring equitable access for all students, regardless of background.
              Recognizing the profound impact of mental health on individuals and communities, we aspire to contribute to the foundational idea that healthy individuals are essential for healthy economies. By fostering mental health awareness and providing personalized resources, Emote seeks to make a positive impact on the overall well-being of University of Washington students. In response to the prevalent mental health challenges among college students, our platform offers a comprehensive mental health check-in, allowing students to assess their emotional well-being. Through tailored recommendations, resources, guidelines, and activities, we strive to address specific concerns and promote a culture of mental health awareness, contributing to the holistic development of University of Washington students and advancing the global pursuit of Sustainable Development Goal 3.</p>
            </div>
            <div className="col-md-6">
              <img src='/img/inside-out.jpeg' className="Home-image" alt="insideOut-logo"></img> 
            </div>

          </div>
          <div className="row">
            <div className="col-md-6">
              <img src='/img/inside-out.jpeg' className="Home-image" alt="insideOut-logo"></img> 
            </div>
            <div className="col-md-6">
              <h2>Quiz Overview </h2>
              <p>
              Welcome to the Emote Mental Health Check-In, where the beloved characters from Inside Out accompany University of Washington students on a mission to optimize mental well-being. Aligned with the UN Sustainable Development Goal 3: Good Health and Well-Being, our interactive quiz streamlines the process for comprehensive mental well-being evaluation. Through the engaging personalities of Inside Out characters, we offer personalized resources and services tailored to individual needs, addressing global health inequalities post-COVID-19. Our commitment extends to providing equitable access to mental health guidance for all University of Washington students. The quiz, guided by the characters, allows users to assess current emotions, with subsequent personalized suggestions, resources, guidelines, and activities aiming to boost morale and address mental health concerns. Join us in this collective journey towards a healthier state of mind, bridging gaps and promoting well-being in alignment with Sustainable Development Goal 3.

              Warning: This is not a diagnostic test for mental illness! 
              </p>
            </div>
          </div>
        </div>
    </header>
    </div>
  )
}