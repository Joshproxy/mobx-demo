import React, { Component } from "react";
import logo from "../../images/logo.svg";
import "./App.css";
import Cart from "../cart/Cart";
import TitleList from "../title/TitleList";
import observableTitleStore from "../../stores/ObservableTitleStore";
import observableCartStore from "../../stores/ObservableCartStore";
import { Route } from "react-router";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Route
            path="/"
            exact={true}
            render={props => (
              <div>
                <Link to="/test">Test Routing</Link>
                <Cart />
                <TitleList />
              </div>
            )}
          />

          <Route
            path="/test"
            render={() => (
              <div>
                <div>test route</div>
                <Link to="/">Go Back</Link>
              </div>
            )}
          />
        </header>
      </div>
    );
  }
}

export default App;
