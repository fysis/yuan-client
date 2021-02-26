import React, { useState } from 'react'
import yuanService from './services/yuan'

import Search from './components/search'
import Result from './components/result'

import './App.css'

const App = () => {

  const [ yuan, setYuan ] = useState([])
  const [ searchInput, setSearchInput ] = useState('')
  const [ status, setStatus ] = useState('noinput')
  
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!searchInput) {
      setYuan({})
      setStatus('noinput')
    }
    else {
      setStatus('loading')
      yuanService
      .getYuan(searchInput)
      .then(data => {setYuan(data);setStatus('success')})
      .catch(err => {setYuan([{error: err}]);setStatus('error')})
    }
  }

  const searchChange = (e) => {
    setSearchInput(e.target.value)
  }

  return (
    <div className="app">
        <div className="container">  
          <h1>源 YUAN</h1>
          <Search changeHandler={searchChange} searchValue={searchInput} submitHandler={handleSubmit}/>
          <Result status={status} yuan={yuan}/>
        </div>
    </div>
  )
}

export default App