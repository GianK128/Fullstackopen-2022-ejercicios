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
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);