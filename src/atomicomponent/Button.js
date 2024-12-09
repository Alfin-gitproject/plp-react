import React from 'react'
import './button.css'
function Button(props) {
  return (
    <>
      <button className='search-btn'>
        <label htmlFor="myInput">{props.labels} </label>
      </button>
    </>
  )
}

export default Button