import React, { useState } from "react";
import "./App.css";
import quizQuestions from "./api/quizQuestions";

function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [latestQuestion, setLatestQuestion] = useState(0);
  const [score, setScore] = useState(0);
  var questions = quizQuestions;


  // A possible answer was clicked
  const optionClicked = (question_id, isCorrect) => {
    
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
      questions[question_id].isCorrect = true;
    }
    
    questions[question_id].isClicked = true;
    setTimeout(()=> {
      if (currentQuestion + 1 < questions.length){
        setLatestQuestion(Math.max(latestQuestion, currentQuestion + 1))
        setTimeout(()=> {
          setCurrentQuestion(currentQuestion + 1);
        }, 100);
        
      }
        
       
      else {
        setShowResults(true);
      }
    },100)
    
  };


  //Reset game by reset the page
  const restartGame = () => {
    window.location.reload(false);
  };

  return (
    <div className="App">
      <h1>JavaScript Quiz</h1>


      {showResults ? (
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>

          <div className="answer_array">
            {
              questions.map(question => {
                return (
                    <div className={`answer_block ${question.isCorrect? "good":"bad"}`}>
                      {parseInt(question.id)+1}
                    </div>
                  )
            
                })
            }
          </div>

          <div className="question-list">
          
          {
            questions.map(question =>{
              return (
                <div className="question-card">
                  <h2>
                    Question {question.id + 1}
                  </h2>
                  <h3 className="question-text">{question.text}</h3>

                  <ul>
                    {question.options.map((option) => {
                      return (
                        <li
                          className={`${option.isCorrect? "good":""}`}
                        >
                          {option.answer}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )
              
            })
          }
          </div>
        </div>
        
      ) : (
        <div className="question-card">
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(currentQuestion, option.isCorrect)}
                >
                  {option.answer}
                </li>
              );
            })}
          </ul>
          <div className="question_array">
            {
              questions.map(question => {
                return (
                    <div className={`question_block ${question.isClicked? "active":""}`}  onClick={() => 
                        {question.isClicked?setCurrentQuestion(question.id):setCurrentQuestion(latestQuestion)}
                      }>
                      {parseInt(question.id)+1}
                    </div>
                  )
            
                })
            }
          </div>
        </div>
        
        
      )}
      
    </div>
  );
}

export default App;