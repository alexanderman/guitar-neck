import React from 'react';
import './string.css';
import Cell from '../cell/cell';

const String = ({ string, stringIdx, markup, dispatchCellOver, dispatchCellOut }) => {
  const lastIdx = string.length - 1;
  return (
    <div className="string">
      {string.map((noteIdx, idx) => 
        <Cell noteIdx={noteIdx} 
              stringIdx={stringIdx} 
              fretIdx={idx} 
              markup={markup[idx]} 
              key={idx} 
              dispatchCellOver={dispatchCellOver}
              dispatchCellOut={dispatchCellOut}
              isLast={idx === lastIdx} />)
      }
      <div className="string-line"></div>
    </div>
  );  
}


export default String;
