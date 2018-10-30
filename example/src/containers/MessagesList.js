import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Message from "./Message";

const MessagesList = ({ messages, currentUser }) => (
  <section id="messages-list">
    <ul>
      {messages.map((message, idx) => (
        <Message key={idx} currentUser={currentUser} {...message} />
      ))}
    </ul>
  </section>
);

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default connect(
  ({ messages, currentUser }) => ({ messages, currentUser }),
  null
)(MessagesList);
