import React, { useEffect, useState } from 'react'
import yuanService from './services/yuan'

import Search from './components/search'
import Result from './components/result'

import './App.css'

const App = () => {

  const [ yuan, setYuan ] = useState({})
  const [ searchInput, setSearchInput ] = useState('')
  
  useEffect(() => {
    if (searchInput) yuanService
      .getYuan(searchInput)
      .then(data => setYuan(data))
    
      if (!searchInput) setYuan({})
  }, [searchInput])

  const searchChange = (e) => {
    setSearchInput(e.target.value)
  }

  return (
    <div className="app">
        <div className="container">  
          <h1>源 YUAN</h1>
          <Search changeHandler={searchChange} searchValue={searchInput}/>
          <Result yuan={yuan[0]} inputValue={searchInput}/>
        </div>
    </div>
  )
}

export default App