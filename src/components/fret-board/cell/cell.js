import './cell.css';
import React from 'react';

const Cell = props => (
  <div className="cell">
    {!props.isLast ? <div className="fret-line"></div> : ''}
  </div>
);

export default Cell;