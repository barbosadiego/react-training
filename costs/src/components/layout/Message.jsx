import React, { useState, useEffect } from 'react';

// css
import './Message.css';

const Message = ({ msg, type }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    
    if (!msg) {
      setVisible(false);
      return;
    } 

    setVisible(true);    

    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);

  }, [msg]);

  return (
    <>
      {visible && (
        <div className={`message ${type ? type : ''}`}>
          <p>{msg}</p>
        </div>
      )}
    </>
  );
};

export default Message;
