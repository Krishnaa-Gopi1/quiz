import React from 'react'

const QuizCard = (props) => {
  const {question,options} = props.quizQuestions;

  return (
    <div>
      <h3>{question}</h3>
      <div>
        <button>{options.a}</button>
        <button>{options.b}</button>
        <button>{options.c}</button>
        <button>{options.d}</button>
      </div>
    </div>
  )
}

export default QuizCard
