import { takeEvery } from "redux-saga/effects";
import username from "./name";
import * as types from "./constants";

const handleNewMessage = function* handleNewMessage(params) {
  yield takeEvery(types.ADD_MESSAGE, action => {
    action.author = username;
    // socket.send(JSON.stringify(action));
  });
};

export default handleNewMessage;
