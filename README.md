# redux-ss

Note: This is currently in experimentation mode to see if this design pattern makes any sense.

A simple, opinionated websocket interface for react-redux. The goal is to make any communication with the server look like an action that would be passed to the reducer. This makes writing websocket code for react-redux simpler in my opionion (hence **ss** for **s**imple **s**ocket).

[![NPM](https://img.shields.io/npm/v/redux-ss.svg)](https://www.npmjs.com/package/redux-ss) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save redux-ss
```

## Usage

Add middleware to deal with the socketed connections.

```js
import { socketMiddleware } from "redux-ss";

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
```

Append code to let the middleware know to sent this to the websocket before sending it to the reducer.

```js
import { SEND_SOCKET } from "redux-ss";

export const addMessage = (message, author) => ({
  type: SEND_SOCKET("ADD_MESSAGE"),
  payload: ...
});
```

## License

MIT © [loggs](https://github.com/loggs)
