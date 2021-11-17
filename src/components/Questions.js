import React from 'react'
import Question from './Question'

const Questions = ({ questionList, answers, setAnswers }) => {
    return <div className="container" id='questionsList'>
        {questionList.map((q) => <Question key={q.key} q={q} answers={answers} setAnswers={setAnswers}/>)}
    </div>
}

export default Questions