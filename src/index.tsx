import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore, Store, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./redux/reducers";
import { RootState, PokemonActionTypes } from "./types/redux";

const store: Store<RootState, PokemonActionTypes> = createStore(
  reducers,
  applyMiddleware(thunk)
);

const app: JSX.Element = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
