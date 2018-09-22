import React from 'react';
import { connect } from 'react-redux';
import './fret-board.css';
import String from './string/string';
import StringsSetup from './strings-setup/strings-setup';
import FretIndexes from './fret-indexes/fret-indexes';


const FretBoard = ({ 
  PRESETS, 
  markup, 
  dispatchCellOver, 
  dispatchCellOut }) => {
  
  return (<div className="fret-board-cont">
    <StringsSetup stringsSetup={PRESETS.STRINGS_SETUP} notes={PRESETS.NOTES} />
    
    <div className="fret-board">
      {PRESETS.STRINGS.map((string, idx) => 
        <String dispatchCellOver={dispatchCellOver} 
                dispatchCellOut={dispatchCellOut} 
                string={string} stringIdx={idx} 
                markup={markup[idx]} key={idx} />
      )}
      <FretIndexes numberOfFrets={PRESETS.NUMBER_OF_FRETS} />
    </div>

  </div>);
};

const mapStateToProps = state => {
  
  return ({
    ...state.strings,
    __state: state
  });  
}

const mapDispatchToProps = dispatch => ({
  dispatchCellOver: (cell) => dispatch({ type: 'cell-over', payload: cell }),
  dispatchCellOut: (cell) => dispatch({ type: 'cell-out', payload: cell })
});

export default connect(mapStateToProps, mapDispatchToProps)(FretBoard);
