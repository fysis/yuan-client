import React, { useState } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import About from './pages/about'
import Dictionary from './pages/dictionary'

import './App.css'



const App = () => {

  const [ yuan, setYuan ] = useState([])
  const [ searchInput, setSearchInput ] = useState('')
  const [ status, setStatus ] = useState('noinput')

  const searchChange = (e) => {
    setSearchInput(e.target.value)
  }

  return (
    <Router>
      <div className="app">
          <div className="container">
            <h1>源 YUAN</h1>
            {/* <Link to="/about">About</Link> */}
            <Switch>
              <Route path="/about" children={<About />}/>
              <Route path="/:parameter" children={
                <Dictionary
                  searchChange={searchChange}
                  searchInput={searchInput}
                  status={status}
                  yuan={yuan}
                  setSearchInput={setSearchInput}
                  setYuan={setYuan}
                  setStatus={setStatus}
                />
              }/>
              <Route path="/" children={
                <Dictionary
                  searchChange={searchChange}
                  searchInput={searchInput}
                  status={status}
                  yuan={yuan}
                  setSearchInput={setSearchInput}
                  setYuan={setYuan}
                  setStatus={setStatus}
                />
              }/>
            </Switch>
          </div>
      </div>
    </Router>
  )
}

export default App