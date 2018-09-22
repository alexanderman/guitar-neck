import React from 'react';
import './strings-setup.css';


const StringsSetup = props => {
  const getNote = noteIdx => props.notes[noteIdx].abc;
  return (
    <div className="strings-setup">
      {props.stringsSetup.map((stringNote, idx) => 
          <div className="strings-setup-cell" key={idx}>{getNote(stringNote)}</div>
      )}
      <div className="strings-setup-cell"></div>
    </div>    
  );
};

export default StringsSetup;