import React from 'react'

const Search = ({changeHandler, searchValue, submitHandler}) => {
    return (
        <div className="search-container">
            <form onSubmit={submitHandler}>
                <input className="search" placeholder="Input Hanzi（汉字)" value={searchValue} type='text' onChange={changeHandler}/>
                {/* <button className="search-button" type="submit">find</button> */}
            </form>
        </div>
    )
}

export default Search