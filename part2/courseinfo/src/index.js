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

const Content = ({ parts }) => {
  return (
    parts.map(part => {
      return (
        <Part
          key={part.name}
          title={part.name} 
          exercises={part.exercises}
        />
      )
    })
  )
}

const Total = ({ parts }) => {
  let sum = 0
  parts.forEach(part => sum += part.exercises)

  return (
    <p>Number of exercises {sum}</p>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <Course course={course}/>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);