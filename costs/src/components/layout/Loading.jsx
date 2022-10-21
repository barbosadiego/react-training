import React from 'react';

// css
import './Loading.css';

// image
import loading from '../../img/loading.svg';

const Loading = (props) => {
  return (
    <div className='loader-container'>
      <img src={loading} className='loader'/>
    </div>
  )
};

export default Loading;
