import React, {useEffect} from 'react'
import yuanService from '../services/yuan'

import Search from '../components/search'
import Result from '../components/result'

import {
    useHistory,
    useParams
  } from "react-router-dom";

const Dictionary = ({searchChange, searchInput, status, yuan, setSearchInput, setYuan, setStatus}) => {

    const history = useHistory()

    const { parameter } = useParams()
  
    useEffect(() => {
      if (parameter) {
        setSearchInput(parameter)
        setStatus('loading')
        yuanService
          .getYuan(parameter)
          .then(data => {setYuan(data);setStatus('success')})
          .catch(err => {setYuan([{error: err}]);setStatus('error')})
      }
    }, [])
  
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
          .then(data => {setYuan(data);setStatus('success');history.push(`/${searchInput}`)})
          .catch(err => {setYuan([{error: err}]);setStatus('error')})
        }
      }
    
      
    

    return (
      <div>
        <Search changeHandler={searchChange} searchValue={searchInput} submitHandler={handleSubmit}/>
        <Result status={status} yuan={yuan}/>
      </div> 
    )
  }

  export default Dictionary