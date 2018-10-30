import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./styles.css";

/*
  This will be an identifier for the web socket action
*/
const SOCKET_STRING = "socket";

/*
  Create socket - takes a websocket url and a dispatch method
  and returns a socket
*/
const createSocket = (url, dispatch) => {
  const s = new WebSocket(url);

  s.onmessage = event => {
    const action = JSON.parse(event.data);
    dispatch(action);
  };

  return s;
};

/*
  Create a specific wrapper for a type to define a socketed type
*/
export const SEND_SOCKET = type => `${SOCKET_STRING}/${type}`;

/*
  capture any socketed requests by the middleware and send to the socket
*/
export const socketMiddleware = url => store => {
  const socket = createSocket(url, store.dispatch);
  return next => action => {
    typeof action.type === "string" &&
    action.type.startsWith(`${SOCKET_STRING}/`)
      ? socket.send(JSON.stringify(action))
      : next(action);
  };
};
