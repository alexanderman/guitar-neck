import { connect } from 'react-redux';
import React from 'react';
import Scales from './scales/scales';

const Controls = ({ ui, majorClicked, minorClicked }) => {
  return (
    <div className="controls">
      <Scales ui={ui} majorClicked={majorClicked} minorClicked={minorClicked} />
    </div>
  );  
}


const mapStateToProps = state => {  
  return ({
    ...state.ui
  });  
}

const mapDispatchToProps = dispatch => ({
  majorClicked: (enable) => dispatch({ type: 'major-scale', payload: enable }),
  minorClicked: (enable) => dispatch({ type: 'minor-scale', payload: enable })
});

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
