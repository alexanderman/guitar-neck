import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Test from './components/lastAction';
import FretBoard from './components/fret-board';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <FretBoard />
          <Test />
        </div>
      </Provider>
    );
  }
}

export default App;
