import {
  INPUT_CHANGE,
  MOVE_CLOCKWISE,
  SET_INFO_MESSAGE,
  SET_QUIZ_INTO_STATE,
  SET_SELECTED_ANSWER,
} from "./action-types";
import { MOVE_COUNTERCLOCKWISE } from "./action-types";
import axios from "axios";

// ❗ You don't need to add extra action creators to achieve MVP
export function moveClockwise(index) {
  return {
    type: MOVE_CLOCKWISE,
    payload: index,
  };
}

export function moveCounterClockwise(index) {
  return {
    type: MOVE_COUNTERCLOCKWISE,
    payload: index,
  };
}

export function selectAnswer(bool) {
  return {
    type: SET_SELECTED_ANSWER,
    payload: bool,
  };
}

export function setMessage(message) {
  return {
    type: SET_INFO_MESSAGE,
    payload: message,
  };
}

export function setQuiz(message) {
  return {
    type: SET_QUIZ_INTO_STATE,
    payload: message,
  };
}

export function inputChange(formObj) {
  return {
    type: INPUT_CHANGE,
    payload: formObj,
  };
}

// ❗ Async action creators
export const fetchQuiz = () => (dispatch) => {
  dispatch(setQuiz(null));
  axios
    .get("http://localhost:9000/api/quiz/next")
    .then((res) => {
      // console.log(res.data);
      const newQuiz = res.data;
      dispatch(setQuiz(newQuiz));
    })
    .catch((err) => {
      const errorMessage = err.message;
      dispatch(setQuiz(errorMessage));
    });
  // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
  // On successful GET:
  // - Dispatch an action to send the obtained quiz to its state
};

export function postAnswer() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  };
}
export function postQuiz() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  };
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
