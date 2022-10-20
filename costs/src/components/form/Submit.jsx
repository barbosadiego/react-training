import React from 'react'

// css
import './Submit.css';

const Submit = ({ text }) => {
  return (
    <div>
      <button className='btn'>{text}</button>
    </div>
  )
}

export default Submit
