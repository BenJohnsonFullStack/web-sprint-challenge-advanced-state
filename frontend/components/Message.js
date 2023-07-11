import React from "react";
import { connect } from "react-redux";
import { setMessage } from "../state/action-creators";
import { Quiz } from "./Quiz";

export function Message(props) {
  const { setMessage } = props;

  return <div id="message">{props.infoMessage}</div>;
}

export default connect((state) => state, { setMessage })(Message);
