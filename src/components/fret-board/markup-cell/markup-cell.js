
import React from 'react';
import './markup-cell.css';

const Markup = ({ markup }) => {
  return (
    <div className="markup-cell" style={markup.style}>
      <span className="noteName">{markup.note.abc}</span>
    </div>
  );  
}


export default Markup;
