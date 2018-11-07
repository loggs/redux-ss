import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { socketMiddleware } from "redux-ss";

import "./index.css";
import App from "./App";
import reducers from "./reducer/reducers";
import username from "./name";
import { addUser } from "./actions";

const store = createStore(
  reducers,
  { currentUser: username, messages: [], users: [] },
  applyMiddleware(socketMiddleware("ws://localhost:8989", addUser(username)))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
