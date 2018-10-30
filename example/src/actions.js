import * as types from "./constants";
import { SEND_SOCKET } from "redux-ss";

let nextMessageId = 0;
var nextUserId = 0;

export const addMessage = (message, author) => ({
  type: SEND_SOCKET(types.ADD_MESSAGE),
  id: nextMessageId++,
  message,
  author
});

export const addUser = name => ({
  type: types.ADD_USER,
  id: nextUserId++,
  name
});

export const messageReceived = (message, author) => ({
  type: types.MESSAGE_RECEIVED,
  id: nextMessageId++,
  message,
  author
});

export const populateUsersList = users => ({
  type: types.USERS_LIST,
  users
});
