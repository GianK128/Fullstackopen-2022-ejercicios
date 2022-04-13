import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const Title = ({ text }) => <h1>{text}</h1>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementGood = () => () => {
    setGood(prevGood => prevGood + 1)
  }
  const incrementNeutral = () => () => {
    setNeutral(prevNeutral => prevNeutral + 1)
  }
  const incrementBad = () => () => {
    setBad(prevBad => prevBad + 1)
  }

  const getAverage = () => {
    return (good - bad) / (good + neutral + bad)
  }
  const getPositives = () => {
    return (good / (good + neutral + bad)) * 100
  }

  return (
    <div>
      <Title text={"Give feedback"} />
      <div>
        <button onClick={incrementGood()}>
          Good
        </button>
        <button onClick={incrementNeutral()}>
          Neutral
        </button>
        <button onClick={incrementBad()}>
          Bad
        </button>
      </div>
      <Title text={"Statistics"} />
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Average: {isNaN(getAverage()) ? 0 : getAverage() }</p>
      <p>Positive: {isNaN(getPositives()) ? 0 : getPositives() }%</p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);