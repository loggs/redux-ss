import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { socketMiddleware, socketCreate } from "redux-ss";

import "./index.css";
import App from "./App";
import reducers from "./reducer/reducers";
import handleNewMessage from "./sagas";
import setupSocket from "./sockets";

const store = createStore(
  reducers,
  applyMiddleware(socketMiddleware("ws://localhost:8989"))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
