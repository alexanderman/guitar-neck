import React from 'react';
import { connect } from 'react-redux';
import MainDispatcher from '../store/actions/main';

const Test = props => {

  const handleClick = () => {
    props.setLastAction();
  };

  return (
    <div onClick={handleClick}>
      <h1>{props.lastAction}</h1>
    </div>
  );
}


const mapStateToProps = state => ({ lastAction: state.main.lastAction, state });

const mapDispatchToProps = dispatch => ({
  setLastAction: MainDispatcher(dispatch).setLastAction
});

export default connect(mapStateToProps, mapDispatchToProps)(Test);
