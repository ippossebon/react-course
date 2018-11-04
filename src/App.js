import React, { Component } from 'react';

import ShoppingList from './components/shopping-list/shopping-list.js'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header"/>
        <ShoppingList />
      </div>
    );
  }
}

export default App;
