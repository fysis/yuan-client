import React from 'react'

const Search = ({changeHandler, searchValue}) => {
    return (
        <div>
            <p>input hanzi (汉字)</p>
            <input value={searchValue} type='text' onChange={changeHandler}/>
        </div>
    )
}

export default Search