import React, {useState} from 'react'
import { Button } from '@mui/material';

const Question = ({q, answers, setAnswers}) => {
    const [answerOne, setAnswerOne] = useState(false)
    const [answerTwo, setAnswerTwo] = useState(false)

    const markAnswer = (res) => {
        if (res === true) {
            setAnswerOne(true)
            setAnswerTwo(false)
        } else {
            setAnswerOne(false)
            setAnswerTwo(true)
        }
        let answersCopy = [...answers]
        answersCopy[q.key] = res
        setAnswers(answersCopy)
    }

    return <div className="questionRow">
        <div className="question">
            <h3>{q.q}</h3>
        </div>
        <div className="answers">
            <div className={`${answerOne ? "answerButtonColored": "answerButton"}`}>
                <Button variant="outlined" color="inherit" onClick={() => {return markAnswer(true)}}>{q.a1}</Button>
            </div>
            <div className={`${answerTwo ? "answerButtonColored": "answerButton"}`}>
            <Button variant="outlined" className={`answerButton${answerTwo ? "Colored": ""}`} color="inherit" onClick={() => {return markAnswer(false)}}>{q.a2}</Button>
            </div>
        </div>
    </div>
}

export default Question
