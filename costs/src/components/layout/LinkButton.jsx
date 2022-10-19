import React from 'react'

// components
import { Link } from 'react-router-dom';

// css
import './LinkButton.css'

const LinkButton = ({ to, text }) => {
  return (
    <Link className='btn' to={to}>
      {text}
    </Link>
  )
}

export default LinkButton
