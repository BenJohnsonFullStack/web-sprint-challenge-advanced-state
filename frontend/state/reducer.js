// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from "redux";
import {
  INPUT_CHANGE,
  MOVE_CLOCKWISE,
  MOVE_COUNTERCLOCKWISE,
  SET_INFO_MESSAGE,
} from "./action-types";

const initialWheelState = 0;
function wheel(state = initialWheelState, action) {
  switch (action.type) {
    case MOVE_CLOCKWISE:
      return action.payload;
    case MOVE_COUNTERCLOCKWISE:
      return action.payload;
    default:
      return state;
  }
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
  switch (action.type) {
    case SET_INFO_MESSAGE:
      return {
        ...state,
        state: action.payload,
      };
    default:
      return state;
  }
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
        form: action.payload,
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
