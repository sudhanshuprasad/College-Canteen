import React from 'react'
import UrlContext from './urlContext'

function UrlState(props) {
  
    const url=`https://college-cant-main-othondgwohpi.herokuapp.com`;

    return (
    <div>
      <UrlContext.Provider value={url}>
        {props.children}
      </UrlContext.Provider>
    </div>
  )
}

export default UrlState
