import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import FretBoard from './components/fret-board';
import Controls from './components/controls';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <FretBoard />
          <Controls />
        </div>
      </Provider>
    );
  }
}

export default App;
