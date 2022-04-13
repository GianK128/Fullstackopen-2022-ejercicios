import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const Title = ({ text }) => {
  return <h1>{text}</h1>
}

const Anecdote = ({ text, votes }) => {
  return (
    <div>
      <p>{text}</p>
      <p>Has {votes} votes.</p>
    </div>
  )
}

const Button = ({ text, handleClick }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const mostVotedIndex = votes.indexOf(Math.max(...votes))

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
      <Title text={"Anecdote of the day"}/>
      <Anecdote 
        text={anecdotes[selected]}
        votes={votes[selected]}
      />
      <Button 
        text={"Vote"}
        handleClick={handleVotes()}
      />
      <Button 
        text={"Next Anecdote"}
        handleClick={handleRandom()}
      />
      <Title text={"Anecdote with most votes"}/>
      <Anecdote 
        text={anecdotes[mostVotedIndex]}
        votes={votes[mostVotedIndex]}
      />
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