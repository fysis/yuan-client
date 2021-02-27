import React from 'react'

const Character = ({character}) => {
    const parts = () => {
        if (character.parts.length > 1) {
            return (
                <>
                    <p><strong>{character.hanzi} consists of {character.parts.length} parts:</strong></p>
                    <ul>
                        {character.parts.map(part => <li key={part}>{part}</li>)}
                    </ul>
                </>
            )
        } else if (character.parts.length === 1) {
            return (
                <>
                    <p><strong>{character.hanzi} has no subparts.</strong></p>
                </>
            )
        }
        else {
            return null
        } 
    }

    return (
        <div className="character-section">
            <h3 className="character-result">{character.hanzi} {character.hanzi_traditional ? `(${character.hanzi_traditional}) ` : null}<em>{character.pinyin}</em></h3>
            <p>{character.english}</p>
            {parts()}
            <h3>Origin</h3>
            <p>{character.explanation}</p>
        </div>
    )
}

export default Character