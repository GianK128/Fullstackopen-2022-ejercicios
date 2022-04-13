import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  
  const handleVotes = () => () => {
    setVotes(prevVotes => {
      let copy = [...prevVotes]
      copy[selected] += 1
      return copy
    })
  }
  
  const handleRandom = () => () => {
    let randomIndex = ~~(Math.random() * anecdotes.length)
    setSelected(randomIndex)
  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>Has {votes[selected]} votes.</p>
      <button onClick={handleVotes()}>
        Vote
      </button>
      <button onClick={handleRandom()}>
        Next Anecdote
      </button>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App anecdotes={anecdotes} />
  </React.StrictMode>
);