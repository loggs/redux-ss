import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./styles.css";

/*
  Class to manage any websocket connection
*/
class SocketStore {
  /*
    Key is url, the valu is the socket
  */
  sockets = {};
  /*
    This is the most recently added socket. Will use for any default actions
  */
  defaultUrl = "";

  getSocket(url) {
    return this.sockets[url];
  }

  getDefaultSocket() {
    return this.sockets[this.defaultUrl];
  }

  setDefaultSocket(url) {
    this.defaultUrl = url;
  }

  addSocket(url, dispatch) {
    // Create socket with onmessage action
    const socket = new WebSocket(url);
    socket.onmessage = event => {
      const action = JSON.parse(event.data);
      dispatch(action);
    };

    // Set the default url to the most recently added
    this.defaultUrl = url;
  }
}

// Create the socket store
const socketStore = new SocketStore();

// Create a reference to the default socket
export const socket = socketStore.getDefaultSocket();

/*
  capture any socketed requests by the middleware and send to the socket
*/
export const socketMiddleware = store => next => action => {
  next(action);
};

export const socketCreate = url => store => {
  socketStore.addSocket(url, store.dispatch);
};

/*
  Create a specific wrapper for a type to define a socketed type
*/
const SEND_SOCKET = type => `socket/${type}`;
