import React from "react";
import { connect } from "react-redux";
import { setMessage } from "../state/action-creators";

export function Message(props) {
  const { setMessage } = props;

  return <div id="message">{}</div>;
}

export default connect((state) => state, { setMessage })(Message);
