import React, { useState } from 'react'
import { SearchTerm } from './Atoms'
import {useNavigate } from 'react-router-dom'
import { useAtom } from 'jotai'

function HomePage() {
    const [words, setWords] = useState('')
    const [searchTerm, setSearchTerm] = useAtom(SearchTerm)
    const navigate = useNavigate()

    const handleWords = (e) => {
        setWords(e.target.value)
    } 
    const handleSubmit = (e) => {
        e.preventDefault()
        setSearchTerm(e.target.elements.searchBar.value)
        console.log('search term (homepage): ' + searchTerm)
        navigate('/search')
    }
  return (
  <>
    <div className='container'>
        <div className='row'>
            <div className='col-12'>
                <h1 className='home-header'>Canadian Recalls &#127809;</h1>
                <h5 className='home-header-supporting'>Empowering Consumers with Recall Awareness</h5>
            </div>
        </div>
    </div>
    <form onSubmit={handleSubmit}>
    <input id='searchBar' onChange={handleWords}></input>
    search term: {words}
    <button>Go</button>
    </form>
  </>
  )
}

export default HomePage