import React, { useState } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import About from './pages/about'
import Dictionary from './pages/dictionary'

import Header from './components/header'

import './App.css'



const App = () => {

  const [ yuan, setYuan ] = useState([])
  const [ searchInput, setSearchInput ] = useState('')
  const [ status, setStatus ] = useState('noinput')
  const [ isFirst, setIsFirst ] = useState(true)

  const searchChange = (e) => {
    setSearchInput(e.target.value)
  }

  return (
    <Router>
      <div className="app">
          <div className="container">
            <Header />
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
                  isFirst={isFirst}
                  setIsFirst={setIsFirst}
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
                  isFirst={isFirst}
                  setIsFirst={setIsFirst}
                />
              }/>
            </Switch>
          </div>
      </div>
    </Router>
  )
}

export default App