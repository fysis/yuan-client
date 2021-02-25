import React from 'react'

const Result = ({yuan, inputValue}) => {


    if (!yuan) {
        if (inputValue) {
            return (
                <div>
                    <p className="nowords">No matches</p>
                </div>
            )
        }
        else {
            return (
                <div>
                    <p className="noinput">Waiting for input</p>
                </div>
            )
        }
    }

    const parts = () => {
        if (yuan.parts.length > 1) {
            return (
                <>
                    <p><strong>{yuan.hanzi} consists of {yuan.parts.length} parts:</strong></p>
                    <ul>
                        {yuan.parts.map(part => <li key={part}>{part}</li>)}
                    </ul>
                </>
            )
        }
        else {
            return null
        } 
    }

    return (
        <div>
            <h2 className="result">{yuan.hanzi} <em>{yuan.pinyin}</em></h2>
            <h3>{yuan.english}</h3>
            {parts()}
            <p><strong>Origin</strong></p>
            <p>{yuan.explanation}</p>
        </div>
    )
}

export default Result