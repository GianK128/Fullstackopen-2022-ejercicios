import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = ({ course }) => {
  return (
    <h2>{course}</h2>
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
          key={part.id}
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
    <p><strong>Total of {sum} exercises</strong></p>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts}/>
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        id: 1,
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        id: 2,
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        id: 3,
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