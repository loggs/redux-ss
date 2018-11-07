import React from "react";
import { connect } from "react-redux";
import { addMessage } from "../actions";

const AddMessage = props => {
  let input;
  console.log(props);
  return (
    <section id="new-message">
      <input
        onKeyPress={e => {
          if (e.key === "Enter") {
            props.addMessage(input.value, props.currentUser);
            input.value = "";
          }
        }}
        type="text"
        id="new-message-input"
        ref={node => {
          input = node;
        }}
      />
    </section>
  );
};

export default connect(
  state => {
    console.log(state);
    return state;
  },
  { addMessage }
)(AddMessage);
