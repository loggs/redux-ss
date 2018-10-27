import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./styles.css";

/*
  init state with { socket: socket(url) }
*/
export const socket = url => {
  // Create the socket
  const s = WebSocket(url);

  // Send incoming socket events to the reducer
  s.onmessage = event => {
    const action = JSON.parse(event.data);
    dispatch(action);
  };

  // Return this instance of the socket
  return s;
};

/*
  capture any socketed requests by the middleware and send to the socket
*/
export const socketMiddleware = store => next => action => {
  console.log("This is the action", action);
  next(action);
};

/*
  Create a specific wrapper for a type to define a socketed type
*/
const SEND_SOCKET = type => `socket/${type}`;
