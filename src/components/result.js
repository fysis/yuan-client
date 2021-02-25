import React from 'react'
import yuan from '../services/yuan'

const Result = ({yuan}) => {

    if (!yuan) return (
        <div>
            <p>NO WORDS FOUND</p>
        </div>
    )

    const parts = () => {
        if (yuan.parts.length > 1) {
            return (
                <>
                    <p><strong>{yuan.hanzi} consists of {yuan.parts.length || 0} part(s):</strong></p>
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
            <h2>{yuan.hanzi}</h2>
            <h3>{yuan.pinyin}</h3>
            <h3>{yuan.english}</h3>
            {parts()}
            <p><strong>Origin</strong></p>
            <p>{yuan.explanation}</p>
        </div>
    )
}

export default Result