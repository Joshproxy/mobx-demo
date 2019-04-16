import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cart from './Cart/Cart';
import TitleList from './TitleList/TitleList';
import observableTitleStore from './Title/ObservableTitleStore';
import observableCartStore from './Cart/ObservableCartStore'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Cart store={observableCartStore} />
          <img src={logo} className="App-logo" alt="logo" />
          <TitleList store={observableTitleStore} />
        </header>
      </div>
    );
  }
}

export default App;
