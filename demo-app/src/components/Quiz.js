import React, { useState, useEffect, useRef } from "react";
import Button from 'react-bootstrap/Button';
import questionsData from "../data/questions.json";
import * as d3 from "d3";
import{ useNavigate }from 'react-router-dom';

const answerValues = {
  "Sad": [4, 3, 2, 1],
  "Happy": [4, 3, 2, 1],
  "Anger": [4, 3, 2, 1],
  "Fear": [4, 3, 2, 1],
  "Stress": [4, 3, 2, 1]
};

function BubbleStuff() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/Happy');
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Go to Home Page</button>
    </div>
  );
}

const BubbleChart = ({ quizResults, onBubbleClick }) => {
  const nav = useNavigate();
  const ref = useRef(null);
  //const history = useHistory();
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

      svg.append("defs")
        .append("filter")
        .attr("id", "neon-glow")
        .attr("x", "-50%")
        .attr("y", "-50%")
        .attr("width", "200%")
        .attr("height", "200%")
        .html(`
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur"></feGaussianBlur>
          <feComponentTransfer in="blur" result="glow">
            <feFuncA type="table" tableValues="0 1 1 1 1"></feFuncA>
          </feComponentTransfer>
          <feMerge>
            <feMergeNode in="glow"></feMergeNode>
            <feMergeNode in="SourceGraphic"></feMergeNode>
          </feMerge>
        `);

      const nodes = d3.hierarchy({ children: data })
        .sum(d => d.value);

      const node = svg.selectAll(".node")
        .data(bubble(nodes).descendants())
        .enter()
        .filter(d => !d.children)
        .append("g")
        .attr("class", "node")
        .attr("transform", d => `translate(${d.x},${d.y})`)
        .on("click", (d) => {
          // Check if d and d.data are defined before accessing the 'name' property
          console.log(d)
          if (d) {
            // Call the onBubbleClick function with the emotion name
            nav("/" + d.target.__data__.data.name);
            // Use useHistory hook to navigate to the corresponding resource page
            //history.push(`/${d.data.name.toLowerCase()}`); // Assuming your route paths are based on emotion names
          } else {
            console.error("Data or data.name is undefined:", d);
          }
        })
        .on("mouseover", function() {
          d3.select(this).selectAll("text")
            .style("fill", "black")
            .style("font-weight", "bold");
          d3.select(this).selectAll("circle")
            .style("fill", "lightyellow")
            .style("filter", "url(#neon-glow)");
        })
        .on("mouseout", function() {
          d3.select(this).selectAll("text")
            .style("fill", "white")
            .style("font-weight", "normal");
          d3.select(this).selectAll("circle")
            .style("fill", d => color(d.data))
            .style("filter", null);
        });

      node.append("circle")
        .attr("r", d => d.r)
        .style("fill", d => color(d.data))
        .style("transition", "fill 0.3s ease-in-out");

      node.append("text")
        .attr("dy", ".3em")
        .style("text-anchor", "middle")
        .text(d => `${d.data.name} (${d.value})`)
        .style("fill", "white");

        return () => {
          svg.remove();
        };
      }
    }, [quizResults]); // Include history in the dependency array
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

  
  const handleBubbleClick = (emotion) => {
    // Navigate to the corresponding resource page based on the emotion
    // switch (emotion) {
    //   case "Sad":
    //     navigate.push("/sad");
    //     break;
    //   case "Happy":
    //     navigate.push("/happy");
    //     break;
    //   case "Anger":
    //     navigate.push("/anger");
    //     break;
    //   case "Fear":
    //     navigate.push("/fear");
    //     break;
    //   case "Stress":
    //     navigate.push("/stress");
    //     break;
    //   default:
    //     break;
    // }
  };
  const handleNext = () => {
    const currentResponse = responses[currentQuestion];
    const nextQuestion = currentQuestion + 1;
  
    if (currentQuestion < questions.length - 1 && currentResponse !== null) {
      setResponses(prevResponses => {
        const updatedResponses = [...prevResponses];
        updatedResponses[nextQuestion] = null; 
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
          <BubbleChart quizResults={quizResults} onBubbleClick={() => handleBubbleClick()} />
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
          <Button disabled={responses[currentQuestion] === null} onClick={handleNext} alt="Next Button">
            {currentQuestion < questions.length - 1 ? "Next" : "Finish"}
          </Button>
        </div>
      )}
      <h4 style={{ color: "red" }}>DISCLAIMER: This quiz is NOT a diagnosis!</h4>
    </div>
  );
}


