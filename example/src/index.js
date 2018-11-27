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
  { currentUser: username, messages: [], users: [] }, // Initial state of the application
  applyMiddleware(
    socketMiddleware(
      "ws://localhost:8989", // Set the ws url to use when creating the connection
      addUser(username) // The initial action to send to the server
    )
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
