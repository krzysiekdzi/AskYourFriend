import React from 'react'

const CompareElement = ({key, question, answers, partnerAnswers}) => {
    return <tr>
        <td className="question" >{question.q}</td>
        <td className="answer" >{answers[question.key] === true ? question.a1 : question.a2}</td>
        <td className="answer" >{partnerAnswers[question.key] === true ? question.a1 : question.a2}</td>
    </tr>
}

export default CompareElement
