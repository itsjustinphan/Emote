import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import questionsData from "../data/questions.json";
import Plotly from 'plotly.js-dist';

const answerValues = {
  "Sad": [4, 3, 2, 1],
  "Happy": [4, 3, 2, 1],
  "Anger": [4, 3, 2, 1],
  "Fear": [4, 3, 2, 1],
  "Stress": [4, 3, 2, 1]
};

const BubbleChart = ({ quizResults }) => {
  useEffect(() => {
    if (quizResults) {
      const data = Object.keys(quizResults).map(emotion => ({
        x: [emotion], // x-axis: Emotion
        y: [quizResults[emotion]], // y-axis: Score
        mode: 'markers',
        marker: {
          size: Math.sqrt(quizResults[emotion]) * 10, // Bubble size based on score
        },
        text: [emotion],
      }));

      const layout = {
        title: '',
        showlegend: false, // Hide legend
        xaxis: {
          showgrid: false, // Hide x-axis gridlines
          zeroline: false, // Hide x-axis zeroline
          showline: false, // Hide x-axis line
          tickfont: {
            size: 0, // Hide x-axis tick labels
          },
        },
        yaxis: {
          showgrid: false, // Hide y-axis gridlines
          zeroline: false, // Hide y-axis zeroline
          showline: false, // Hide y-axis line
          tickfont: {
            size: 0, // Hide y-axis tick labels
          },
        },
      };

      Plotly.newPlot('bubble-chart', data, layout);
    }
  }, [quizResults]);

  return <div id="bubble-chart" />;
};

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState(new Array(questionsData.length).fill(null));
  const [quizResults, setQuizResults] = useState(null);
  const questions = questionsData;

  const handleResponseChange = (responseIndex) => {
    setResponses(prevResponses => {
      const updatedResponses = [...prevResponses];
      updatedResponses[currentQuestion] = responseIndex;
      return updatedResponses;
    });
  };

  const handleNext = () => {
    const currentResponse = responses[currentQuestion];
    const nextQuestion = currentQuestion + 1;
  
    if (currentQuestion < questions.length - 1 && currentResponse !== null) {
      setResponses(prevResponses => {
        const updatedResponses = [...prevResponses];
        updatedResponses[nextQuestion] = null; // Reset response for next question
        return updatedResponses;
      });
      setCurrentQuestion(nextQuestion);
    } else {
      displayQuizResults();
    }
  };

  const displayQuizResults = () => {
    const results = {};
    for (const emotion in answerValues) {
      let score = 0;
      const questionsForEmotion = questions.filter(question => question.emotion === emotion);
      questionsForEmotion.forEach(question => {
        const questionIndex = questions.findIndex(q => q === question);
        const selectedOptionIndex = responses[questionIndex];
        if (selectedOptionIndex !== null) {
          const optionScore = answerValues[emotion][selectedOptionIndex];
          score += optionScore;
        }
      });
      results[emotion] = score;
    }
    setQuizResults(results);
  };

  return (
    <div className="full-height">
      <header>
        <h1>{quizResults ? "Quiz Results" : "Quiz"}</h1>
      </header>

      {quizResults ? (
        <div>
          <BubbleChart quizResults={quizResults} />
        </div>
      ) : (
        <div>
          <p>Question {currentQuestion + 1}/{questions.length}: {questions[currentQuestion].question}</p>
          <form>
            {questions[currentQuestion].options.map((option, index) => (
              <div key={index}>
                <input type="radio" id={`option_${index}`} name={`question_${currentQuestion}`} value={index} defaultChecked={false} onChange={() => handleResponseChange(index)} />
                <label htmlFor={`option_${index}`}>{option}</label>
              </div>
            ))}
          </form>
          <Button disabled={responses[currentQuestion] === null} onClick={handleNext}>
            {currentQuestion < questions.length - 1 ? "Next" : "Finish"}
          </Button>
        </div>
      )}
      <h4>DISCLAIMER: This quiz is NOT a diagnosis!</h4>
    </div>
  );
}
