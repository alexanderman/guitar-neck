import React from 'react';
import './string.css';
import Cell from '../cell/cell';

const String = props => {
  const lastIdx = props.string.length - 1;
  return (
    <div className="string">
      {props.string.map((noteIdx, idx) => <Cell noteIdx={noteIdx} key={idx} isLast={idx === lastIdx} />)}
      <div className="string-line"></div>
    </div>
  );  
}


export default String;
