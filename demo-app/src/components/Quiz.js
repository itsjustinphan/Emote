import React, { useState, useEffect, useRef } from "react";
import Button from 'react-bootstrap/Button';
import questionsData from "../data/questions.json";
import * as d3 from "d3";

const answerValues = {
  "Sad": [4, 3, 2, 1],
  "Happy": [4, 3, 2, 1],
  "Anger": [4, 3, 2, 1],
  "Fear": [4, 3, 2, 1],
  "Stress": [4, 3, 2, 1]
};

const BubbleChart = ({ quizResults }) => {
  const ref = useRef(null);
  console.log(quizResults);
  useEffect(() => {
    if (quizResults) {
      const data = Object.keys(quizResults).map(emotion => ({
        name: emotion,
        value: quizResults[emotion],
      }));

      const diameter = 600;
      const color = d3.scaleOrdinal(d3.schemeCategory10);

      const bubble = d3.pack()
        .size([diameter, diameter])
        .padding(1.5);

      const svg = d3.select(ref.current)
        .append("svg")
        .attr("width", diameter)
        .attr("height", diameter)
        .attr("class", "bubble");

      const nodes = d3.hierarchy({ children: data })
        .sum(d => d.value);

        const node = svg.selectAll(".node")
        .data(bubble(nodes).descendants())
        .enter()
        .filter(d => !d.children)
        .append("g")
        .attr("class", "node")
        .attr("transform", d => `translate(${d.x},${d.y})`);
      
      node.append("circle")
        .attr("r", d => d.r)
        .style("fill", d => color(d.data))
        .on("mouseover", function(d) {
          d3.select(this).style("fill", "red");
          const score = quizResults[d.data];
          d3.select(this.parentNode)
            .append("text")
            .attr("class", "bubble-score")
            .attr("x", 0)
            .attr("y", 5)
            .style("text-anchor", "middle")
            .text(score);
        })
        .on("mouseout", function() {
          d3.select(this).style("fill", d => color(d.data));
          d3.select(".bubble-score").remove();
        });
      
      node.append("text")
        .attr("dy", ".3em")
        .style("text-anchor", "middle")
        .text(d => `${d.data.name} (${d.value})`) // Displaying both emotion and size
        .style("fill", "white");

      // Remove the SVG on component unmount
      return () => {
        svg.remove();
      };
    }
  }, [quizResults]);

  return <div ref={ref}></div>;
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
