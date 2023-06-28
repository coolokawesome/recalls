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
            <div className='col-12'>
            <h5 className='display-item-date'>{props.updated}</h5>
            <p className=''>#{props.NID}</p>
            </div>
            <h3 className='col-12 display-item-title'>{props.Product != "" ? props.Product.slice(0) : props.Title}</h3>
            
          </div>
          <div className='bottom-card'>
            <button className='see-more-button' id={props.NID} onClick={handleSeeMore}>See More</button>
          </div>
      </div>
      
    </div>
      
     
  )
}

export default DisplayItem