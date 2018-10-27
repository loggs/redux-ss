import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./styles.css";

export const simpleMiddleWare = store => next => action => {
  console.log("This is the action", action);
  next(action);
};
