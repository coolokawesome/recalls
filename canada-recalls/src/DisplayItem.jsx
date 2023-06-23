import React from 'react'

function DisplayItem(props) {
  return (
    <div className='col-12 col-md-6 col-lg-4 col-xl-3 p-3 display-item-outer' key={props.NID} id={`item-${props.NID}`}>
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
    </div>
      
     
  )
}

export default DisplayItem