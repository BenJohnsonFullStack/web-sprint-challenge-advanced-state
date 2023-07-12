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

export function selectAnswer(id) {
  return {
    type: SET_SELECTED_ANSWER,
    payload: id,
  };
}

export function setMessage(message) {
  return {
    type: SET_INFO_MESSAGE,
    payload: message,
  };
}

export function setQuiz(quizObj) {
  return {
    type: SET_QUIZ_INTO_STATE,
    payload: quizObj,
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

export const postAnswer = (quizAnswerPost) => (dispatch) => {
  dispatch(selectAnswer(null));
  axios
    .post("http://localhost:9000/api/quiz/answer", quizAnswerPost)
    .then((res) => {
      dispatch(setMessage(res.data.message));
    })
    .then(() => {
      dispatch(fetchQuiz());
    })
    .catch((err) => {
      dispatch(setMessage(err.message));
    });
  // On successful POST:
  // - Dispatch an action to reset the selected answer state
  // - Dispatch an action to set the server message to state
  // - Dispatch the fetching of the next quiz
};

export const postQuiz = (newQuizPost, questionMessageText) => (dispatch) => {
  axios
    .post("http://localhost:9000/api/quiz/new", newQuizPost)
    .then((res) => {
      dispatch(setQuiz(res.data));
    })
    .then(() => {
      dispatch(
        setMessage(`Congrats: "${questionMessageText}" is a great question!`)
      );
    })
    .then(() => {
      dispatch(
        inputChange({
          newQuestion: "",
          newTrueAnswer: "",
          newFalseAnswer: "",
        })
      );
    })
    .catch((err) => {
      dispatch(setMessage(err.message));
    });
  // On successful POST:
  // - Dispatch the correct message to the the appropriate state
  // - Dispatch the resetting of the form
};

// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
