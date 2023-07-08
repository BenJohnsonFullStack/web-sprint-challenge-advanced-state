// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from "redux";
import { INPUT_CHANGE } from "./action-types";

const initialWheelState = 0;
function wheel(state = initialWheelState, action) {
  return state;
}

const initialQuizState = null;
function quiz(state = initialQuizState, action) {
  return state;
}

const initialSelectedAnswerState = null;
function selectedAnswer(state = initialSelectedAnswerState, action) {
  return state;
}

const initialMessageState = "";
function infoMessage(state = initialMessageState, action) {
  return state;
}

const initialFormState = {
  newQuestion: "",
  newTrueAnswer: "",
  newFalseAnswer: "",
};
function form(state = initialFormState, action) {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        newQuestion: action.payload,
      };
    default:
      return state;
  }
}

export default combineReducers({
  wheel: wheel,
  quiz: quiz,
  selectedAnswer: selectedAnswer,
  infoMessage: infoMessage,
  form: form,
});
