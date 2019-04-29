import React, { Component } from "react";
import { Link } from "react-router-dom";
import IAuth from "../../auth/IAuth";
import logo from "../../images/logo.svg";
import Cart from "../cart/Cart";
import TitleList from "../title/TitleList";
import "./App.css";

interface IAppProps {
  auth: IAuth;
}

class App extends Component<IAppProps> {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Link to="/test">Test Routing</Link>
          <div>{process.env.REACT_APP_ENV}</div>
          <Cart />
          <TitleList />
        </header>
      </div>
    );
  }
}

export default App;
