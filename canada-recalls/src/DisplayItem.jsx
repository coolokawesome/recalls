import React, { useState } from 'react'
import { ModalInfo, ModalState, Json } from './Atoms'
import { atom, useAtom } from 'jotai'

function DisplayItem(props) {
  const [modalInfo, setModalInfo] = useAtom(ModalInfo)
  const [modalState, setModalState] = useAtom(ModalState)
  const [json, setJson] = useAtom(Json)
  //set the new modal information 


  const handleSeeMore = (e) => {
    const searchableID = e.target.id
    const handleFind = json.find(element => element.NID == searchableID.toString())
    console.log('handleFind (id): ' + handleFind, 'the Elements ID: ' + searchableID.toString())
    setModalInfo(
      handleFind
    );
    setModalState(true)
  }

  return (
    <div className='col-12 display-item-outer' key={props.NID} id={`item-${props.NID}`}>
        <div className='display-item-inner'>
          <div className='top-card row'>
            <h3 className='col-12'>{props.Title}</h3>
            <p className='col-12'>NID# {props.NID}</p>
          </div>
          <div className='bottom-card'>
            <h5>Issue: {props.Issue}</h5>
            <h5>Last Updated: {props.updated}</h5>
          </div>
      </div>
      <button id={props.NID} onClick={handleSeeMore}>See More</button>
    </div>
      
     
  )
}

export default DisplayItem