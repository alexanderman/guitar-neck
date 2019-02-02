import React from 'react';
import './scales.css';

const Scales = ({ui, majorClicked, minorClicked}) => {
  return (
    <div className="scales">
      A
      <button onClick={e=>majorClicked(true)}>Major</button>
      <button onClick={e=>minorClicked(true)}>Minor</button>
    </div>
  );  
}


export default Scales;
