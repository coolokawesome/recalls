import React from 'react'

function HomepageHeader() {
  return (
    <div className='homepage-header-container'>
        <div className='homepage-header'>
            <div className='homepage-header-inner container d-flex'>
              <div>
                <h1>Canadian Recalls</h1>
              </div>
            <div>
              <a style={{
                color: 'white',
    
              }} target='_blank' href={'https://github.com/coolokawesome/recalls'}> Repo </a>
            </div>
            </div>
        </div>
    </div>
  )
}

export default HomepageHeader