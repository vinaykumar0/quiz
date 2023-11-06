import { useState } from 'react'
import './App.css'
import Question from './data';
import { useNavigate } from 'react-router-dom';

function App() {
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [currQues, setCurrQues] = useState(0)

  const handleClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1)
    }
    if (currQues + 1 < Question.length) {
      setCurrQues(currQues + 1)
    } else {
     setShowResult(true)
    }
  }
  const handleBtn = () => {
    setCurrQues(0)
    setScore(0)
    setShowResult(false)
  }
  return (

    <div className='App'>
      <h1>Quiz</h1>
      <h2>Score : {score}</h2>
      {
        !showResult ? (<div className='question-card'>
          
          <h1>Question {currQues + 1} out of {Question.length}</h1>
          <p>{Question[currQues].question}</p>
          <ul>
            {Question[currQues].ansOption.map((ele ,index) => (
              <li onClick={() => { handleClick(ele.isCorrect) }} key={index}>{ele.option}</li>
            ))}
          </ul>
        </div>
        ) :
          (<div className='final-result'>
            <h1>Final Result</h1>
            <h2>
              {score} out of {Question.length} correct - ({(score/Question.length)*100 +"%"})
            </h2>
            <button onClick={handleBtn}>Restart Quiz</button>
          </div>)
      }

    </div>

  )
}

export default App
