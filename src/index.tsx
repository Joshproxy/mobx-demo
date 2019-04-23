import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app/App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "mobx-react";

import observableTitleStore from "./stores/ObservableTitleStore";
import observableCartStore from "./stores/ObservableCartStore";
import * as storeNames from "./stores/StoreNames";

const stores = {
  [storeNames.cartStore]: observableCartStore,
  [storeNames.titleStore]: observableTitleStore
};

(window as any)._____APP_STATE_____ = stores;

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
