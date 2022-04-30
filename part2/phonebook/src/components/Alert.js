import React from "react";
import './index.css'

const Alert = ({ message, category }) => {
  if (message === null) {
    return null
  }
  
  return (
    <div className={`alert-${category}`}>
      {message}
    </div>
  )
}

export default Alert