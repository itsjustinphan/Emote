import React, { useState, useEffect } from "react";
import { handleScroll } from "./App";
import Button from 'react-bootstrap/Button';
import questionsData from "../data/questions.json";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState([]);
  const questions = questionsData;

  const handleResponseChange = (response) => {
    setResponses(prevResponses => [...prevResponses, response]);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div className="full-height">
      <header>
        <div className="landing-headings">
          <h1>QUIZ</h1>
        </div>
      </header>

      {currentQuestion < questions.length && (
        <div>
          <p>{questions[currentQuestion].question}</p>
          <form>
            {questions[currentQuestion].options.map((option, index) => (
              <div key={index}>
                <input type="radio" id={`option_${index}`} name={`question_${currentQuestion}`} value={option} onChange={() => handleResponseChange(option)} />
                <label htmlFor={`option_${index}`}>{option}</label>
              </div>
            ))}
          </form>
          <Button onClick={handleNext}>Next</Button>
        </div>
      )}
    </div>
  );
}