import React, { useState, useEffect } from 'react'
import Questions from './components/Questions'
import Language from "./components/Language"
import CountdownClock from "./components/Countdown"
import SendForm from "./components/Send"
import CompareAnswersButton from "./components/CompareButton"
import CompareAnswers from "./components/CompareAnswers"


function App() {
  const [questions, setQuestions] = useState([])
  const [answers, setAnswers] = useState([])
  const [language, setLanguage] = useState('en')
  const [partnerAnswers, setPartnerAnswers] = useState([])
  const [compareAnswers, setCompareAnswers] = useState(false)
  const [partnerView, setPartnerView] = useState(false)
  const [compareOnly, setCompareOnly] = useState(false)

  const fetchQuestions = async (filename) => {
    const res = await fetch(filename)
    return await res.json()
  }

  useEffect(() => {
    if (navigator.language.includes('pl') || navigator.language.includes('PL')){
      setLanguage('pl')
    }
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    if (params.data !== undefined && params.compareAnswers === "true") {
      const data = JSON.parse(atob(params.data))
      setAnswers(data.answers)
      setPartnerAnswers(data.partnerAnswers)
      setCompareAnswers(true)
      setCompareOnly(true)
    } else if (params.data !== undefined){
      const data = JSON.parse(atob(params.data))
      setPartnerAnswers(data.answers)
      setPartnerView(true)
    }
  }, [])

  useEffect(() => {
    const getQuestions = async () => {
      let filename;
      if (language === 'pl'){
        filename = '/questions_pl.json'
      } else {
        filename = '/questions.json'
      }
      const questionsFromServer = await fetchQuestions(filename)
      setAnswers(Array(questionsFromServer.length))
      setQuestions(questionsFromServer)
    }
    getQuestions()
  }, [language])

  if (compareOnly === true){
    return (
      <div className="App">
        <div className="container">
          {language !== 'pl' && <div id="title"><h1 id="titleHeader">Ask your partner</h1></div>}
          {language === 'pl' && <div id="title"><h1 id="titleHeader">Zapytaj partnera</h1></div>}
          <Language setLanguage={setLanguage}/>
          <CountdownClock language={language}/>
          {language !== 'pl' && <div><h2 id="comparsion">Answers comparison</h2></div>}
          {language === 'pl' && <div><h2 id="comparsion">Porównanie odpowiedzi</h2></div>}
        </div>
        {compareAnswers && <CompareAnswers language={language} answers={answers} partnerAnswers={partnerAnswers} questions={questions} compareOnly={compareOnly} />}
      </div>
    );
  }

  return (
    <div className="App">
      <div className="container">
        {language !== 'pl' && <div id="title"><h1 id="titleHeader">Ask your partner</h1></div>}
        {language === 'pl' && <div id="title"><h1 id="titleHeader">Zapytaj partnera</h1></div>}
        <Language setLanguage={setLanguage}/>
        <CountdownClock language={language}/>
      </div>
      <Questions questionList={questions} answers={answers} setAnswers={setAnswers}/>
      {partnerView || <SendForm answers={answers} language={language}/>}
      {partnerView  && <CompareAnswersButton language={language} setCompareAnswers={setCompareAnswers} compareAnswers={compareAnswers} partnerAnswers={partnerAnswers}/>}
      {compareAnswers && <CompareAnswers language={language} answers={answers} partnerAnswers={partnerAnswers} questions={questions} compareOnly={compareOnly}/>}
    </div>
  );
}

export default App;
