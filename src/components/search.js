import React from 'react'

const Search = ({changeHandler, searchValue}) => {
    return (
        <div className="search-container">
            <input className="search" placeholder="Input Hanzi（汉字）" value={searchValue} type='text' onChange={changeHandler}/>
        </div>
    )
}

export default Search