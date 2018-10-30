import { combineReducers } from "redux";
import messages from "./messages";
import users from "./users";
import username from "../name";

const chat = combineReducers({
  messages,
  users,
  currentUser: (state = "", _) => state
});

export default chat;
