import React from 'react';
import './fret-indexes.css';


const FretIndexes = props => {
  const indexCellList = [];
  for (let i = 0; i < props.numberOfFrets; i++) {
    indexCellList.push(<div className="fret-indexes-cell" key={i}>{i}</div>);
  }

  return (
    <div className="fret-indexes">
      {indexCellList}
    </div>    
  );
};

export default FretIndexes;