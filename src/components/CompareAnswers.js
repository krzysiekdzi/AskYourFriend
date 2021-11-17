import React, { useState } from 'react'
import CompareElement from './CompareElement'
import { Button } from '@mui/material';




const CompareAnswers = ({ language, answers, partnerAnswers, questions, compareOnly }) => {
    const [link, setLink] = useState('')

    const notify = () => {
        const button = document.getElementById('notifyButton')
        const linkButton = document.getElementById('linkButton')
        button.style.display = 'none'
        const body = {
            answers: partnerAnswers,
            partnerAnswers: answers
        }
        linkButton.style.display = 'inline-flex'
        const encoded = btoa(JSON.stringify(body))
        setLink(window.location.href.split('?')[0] + `?data=${encoded}&compareAnswers=true`)
    }

    const copyLink = () => {
        navigator.clipboard.writeText(link)
    }

    return <div className="container">
        <table id="comparisonTable" className="compareTable">
            <tr>
                <th className="question">{language === 'pl' ? 'Pytanie' : 'Question'}</th>
                <th className="answer">{language === 'pl' ? 'Twoja odpowiedź' : 'Your answer'}</th>
                <th className="answer">{language === 'pl' ? 'Odpowiedź partnera' : "Partner's answer"}</th>
            </tr>
            {questions.map((el) => <CompareElement question={el} answers={answers} partnerAnswers={partnerAnswers} />)}
        </table>
        {compareOnly || <Button id="notifyButton" color="inherit" variant="outlined" onClick={notify}>{language === 'pl' ? 'Wygeneruj link partnerowi' : 'Generate link for your partner'}</Button>}
        {compareOnly || <Button id="linkButton" color="inherit" variant="outlined" onClick={copyLink}>{language === 'pl' ? 'Skopiuj link' : 'Copy link'}</Button>}
    </div>
}

export default CompareAnswers
