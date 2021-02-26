import React from 'react'

import Character from './character'

const Result = ({status, yuan}) => {

    console.log(yuan)

    if (status === 'error') {
            return (
                <div>
                    <p className="nowords">No matches</p>
                </div>
            )
    } else if (status === 'noinput') {
            return (
                <div>
                    <p className="noinput">Enter a word/character</p>
                </div>
            )
    } else if (status === 'loading') {
            return (
                <div>
                    <p className="loading">Loading...</p>
                </div>
            )
    } else if (status === 'success') {
        return (
            <div>
                <div className="main-result">
                    <h2 className="result">{yuan.word.hanzi} <em>{yuan.word.pinyin}</em></h2>
                    <p>{yuan.word.english} {yuan.word.emoji || ''}</p>
                    <h3>Explanation</h3>
                    <p>{yuan.word.explanation}</p>
                </div>
                <div className="sub-result">
                    <h2>Characters</h2>
                    {yuan.characters.map(character => <Character character={character}/>)}
                </div>
    
            </div>
        )
    } 

    return (
        <div>
            <p className="nowords">Status not resolved</p>
        </div>
    )
}

export default Result