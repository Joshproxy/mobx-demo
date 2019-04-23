import React, { Component } from "react";
import { Redirect, Route, Router, Link } from "react-router-dom";
import App from "./components/app/App";
import Auth from "./auth/Auth";
import { createBrowserHistory } from "history";

const auth = new Auth();

export class Routes extends Component {
  render() {
    return (
      <Router history={createBrowserHistory()}>
        <div>
          <Route
            path="/"
            exact={true}
            render={props => <App auth={auth} {...props} />}
          />

          <Route
            path="/test"
            render={() => (
              <div>
                <h1>test route</h1>
                <Link to="/">Go Back</Link>
              </div>
            )}
          />
          <Route
            path="/ping"
            render={props =>
              !auth.isAuthenticated() ? (
                <span>not authenticated</span>
              ) : (
                <span>authenticated</span>
              )
            }
          />
        </div>
      </Router>
    );
  }
}
