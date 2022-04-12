import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ course }) => {
  return (
    <h1>{course}</h1>
  )
}

const Part = ({ title, exercises }) => {
  return (
    <p>{title} {exercises}</p>
  )
}

const Content = ({ part1, part2, part3 }) => {
  return (
    <div>
      <Part title={part1.name} exercises={part1.exercises}/>
      <Part title={part2.name} exercises={part2.exercises}/>
      <Part title={part3.name} exercises={part3.exercises}/>
    </div>
  )
}

const Total = ({ total }) => {
  return (
    <p>Number of exercises {total}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        part2={part2}
        part3={part3}
      />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))