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
  const sum = parts.reduce((prev, curr) => prev + curr.exercises, 0)
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
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1,
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2,
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3,
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1,
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2,
        },
      ],
    },
  ]

  return (
    <div>
      <h1>Web development curriculum</h1>
      {courses.map(course => (
        <Course key={course.id} course={course}/>
      ))}
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);