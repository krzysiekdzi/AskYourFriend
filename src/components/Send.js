import React, {useState} from 'react'
import { Button } from '@mui/material';

const SendForm = ({ answers, language }) => {
    const [showLink, setShowLink] = useState(false)
    const [link, setLink] = useState('')

    const copy = () => {
        navigator.clipboard.writeText(link)
        
    }

    const sendData = async () => {
        const body = {
            answers: answers
        }
        const encoded = btoa(JSON.stringify(body))
        setLink(window.location.href + `?data=${encoded}`)
        setShowLink(true)
        const link = document.getElementById("link")
        link.style.display = "inline-flex"
        const el = document.getElementById("sendForm")
        el.style.display = 'none'
    }

    return <div className="container">
        <div id="sendForm">
            <Button variant="outlined" color="inherit" type="submit" onClick={sendData}>{language === 'pl' ? 'Wygeneruj link partnerowi': 'Generate link for your partner'}</Button>
        </div>
        <div id="link">
            <Button variant="outlined" color="inherit" onClick={copy}>{language === 'pl' ? 'Skopiuj link': 'Copy link'}</Button>
        </div>
    </div>
}

export default SendForm