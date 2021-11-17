import React from 'react'
import { Button } from '@mui/material';

const CompareAnswersButton = ({ language, setCompareAnswers, compareAnswers, partnerAnswers}) => {
    return <div id='cmpBtn' className="container">
        <Button color="inherit" onClick={()=>{
            const el = document.getElementById('questionsList')
            const btn = document.getElementById('cmpBtn')
            console.log(partnerAnswers)
            el.style.display = 'none'
            btn.style.display = 'none'
            setCompareAnswers(!compareAnswers)}}>{language === 'pl' ? 'Porównaj Wasze wybory': 'Compare your answers'}</Button>
    </div>
}

export default CompareAnswersButton
