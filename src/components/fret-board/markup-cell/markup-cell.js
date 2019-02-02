
import React from 'react';
import './markup-cell.css';

const Markup = ({ markup }) => {
  return (
    <div className="markup-cell">
      <div className="markup-bg" style={{...markup.style, ...markup.style_hover}}></div>
      <span className="noteName">{markup.note.abc}</span>
    </div>
  );  
}


export default Markup;
