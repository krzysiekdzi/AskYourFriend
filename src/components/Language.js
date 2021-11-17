import React from 'react'
import { Button } from '@mui/material';


const Language = ({ setLanguage }) => {
    return <div className="languages">
        <Button onClick={() => {setLanguage('en')}}><img className="flag" src="/british_flag.png" alt='English language' width="60" height="40"/></Button>
        <Button onClick={() => {setLanguage('pl')}}><img className="flag" src="/polish_flag.png" alt='Polish language' width="60" height="40"/></Button>
    </div>
}

export default Language