
import React from 'react';
import './markup-cell.css';

const Markup = ({ markup }) => {
  return (
    <div className="markup-cell" style={markup.style}>
    </div>
  );  
}


export default Markup;
