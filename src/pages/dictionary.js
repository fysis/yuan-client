import React, {useEffect} from 'react'
import yuanService from '../services/yuan'

import Search from '../components/search'
import Result from '../components/result'

import {
    useHistory,
    useParams
  } from "react-router-dom";

const Dictionary = ({isFirst, setIsFirst, searchChange, searchInput, status, yuan, setSearchInput, setYuan, setStatus}) => {

    const history = useHistory()

    const { parameter } = useParams()
  
    useEffect(() => {
      if (parameter) {
        setSearchInput(parameter)
        setIsFirst(false)
        setStatus('loading')
        yuanService
          .getYuan(parameter)
          .then(data => {setYuan(data);setStatus('success')})
          .catch(err => {setYuan([{error: err}]);setStatus('error')})
      }
    }, [])
  
    const handleSubmit = (e) => {

        e.preventDefault()
    
        setIsFirst(false)

        history.push(`/${searchInput}`)

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
    
      
    

    return (
      <div>
        <Search changeHandler={searchChange} searchValue={searchInput} submitHandler={handleSubmit}/>
        <Result status={status} yuan={yuan}/>
        { isFirst ? <p>Hit enter to submit. Your first query may take longer than normal.</p> : null }
      </div> 
    )
  }

  export default Dictionary