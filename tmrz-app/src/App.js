import React, { Component } from 'react';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';

import logo from './logo.svg';
import './App.css';

import { update } from './actions'

import NewTimer from './components/new-timer'
import ListTimers from './components/list-timers'

import { loadState, saveState } from './utils'

import throttle from 'lodash/throttle'

const persistedState = loadState()
const store = createStore(reducers, persistedState)

store.subscribe(throttle(() => {
  saveState(store.getState())
}, 1000));

let lastUpdateTime = Date.now()
setInterval(() => {
  const now = Date.now()
  const deltaTime = now - lastUpdateTime
  lastUpdateTime = now

  store.dispatch(update(deltaTime))

}, 50)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <NewTimer />
          <ListTimers />
        </div>
      </Provider>
    );
  }
}

export default App;
