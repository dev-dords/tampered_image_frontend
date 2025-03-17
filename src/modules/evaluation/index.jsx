import React from 'react'
import './evaluation.scss'


const EvaluationComponent = (props) => {
  const { verdict } = props
  return (
    <div className="evaluation-container">
      <div className="header">VERDICT : </div>
      <span className="text">{verdict}</span>
    </div>
  )
}

export default EvaluationComponent