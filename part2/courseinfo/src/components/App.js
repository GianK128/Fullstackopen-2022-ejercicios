import React from 'react';

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

const App = ({ courses }) => {
  return (
    <div>
      <h1>Web development curriculum</h1>
      {courses.map(course => (
        <Course key={course.id} course={course}/>
      ))}
    </div>
  )
}

export default App;