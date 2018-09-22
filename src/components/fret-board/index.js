import React from 'react';
import { connect } from 'react-redux';
import './fret-board.css';
import String from './string/string';
import StringsSetup from './strings-setup/strings-setup';
import FretIndexes from './fret-indexes/fret-indexes';


const FretBoard = props => {
  const getNote = noteIdx => props.NOTES[props.stringsSetup[noteIdx]].abc;

  return (<div className="fret-board-cont">
    <StringsSetup stringsSetup={props.stringsSetup} notes={props.NOTES} />
    
    <div className="fret-board">
      {props.strings.map((string, idx) => 
        <String string={string} key={idx} />
      )}
      <FretIndexes numberOfFrets={props.numberOfFrets} />
    </div>

  </div>);
};

const mapStateToProps = state => ({
  ...state.strings
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(FretBoard);
