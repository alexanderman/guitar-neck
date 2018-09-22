import './cell.css';
import React from 'react';
import Markup from '../markup-cell/markup-cell'

const Cell = ({ isLast, markup, noteIdx, stringIdx, fretIdx, dispatchCellOver, dispatchCellOut }) => (
  <div className="cell" 
    onMouseOver={e => dispatchCellOver({ stringIdx, fretIdx, noteIdx })}
    onMouseOut={e => dispatchCellOut({ stringIdx, fretIdx, noteIdx })}>
    
    {!isLast && <div className="fret-line"></div>}
    {markup && <Markup markup={markup} />}
  
  </div>
);

export default Cell;