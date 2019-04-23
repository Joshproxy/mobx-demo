import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import './App.css';
import Cart from '../cart/Cart';
import TitleList from '../title/TitleList';
import observableTitleStore from '../../stores/ObservableTitleStore';
import observableCartStore from '../../stores/ObservableCartStore'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Cart />
          <img src={logo} className="App-logo" alt="logo" />
          <TitleList />
        </header>
      </div>
    );
  }
}

export default App;
