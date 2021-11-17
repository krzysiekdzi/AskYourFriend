import React from 'react'
import Countdown from 'react-countdown'

const CountdownClock = ({ language }) => {
    let d = new Date();
    d.setDate(d.getDate() + (((1 + 5 - d.getDay()) % 7) || 7));
    return <div className="countdown">
        <h2 className="timerField">{language === 'pl' ? 'Następne pytania za: ' : 'Next questions in: '}
        <Countdown id="timer" date={d.getTime() - d.getHours() * 3600000 - d.getMinutes() * 60000}><span></span></Countdown>
        </h2>
    </div>
}

export default CountdownClock