import React from "react";
import { connect } from "react-redux";
import { inputChange, postQuiz } from "../state/action-creators";

export function Form(props) {
  const { inputChange, postQuiz } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;

    inputChange({
      ...props.form,
      [name]: value,
    });
  };

  const onSubmit = (evt) => {
    const newQuizQuestion = {
      newQuestion: props.form.newQuestion,
      newTrueAnswer: props.form.newTrueAnswer,
      newFalseAnswer: props.form.newFalseAnswer,
    };

    const newQuizPost = {
      question_text: props.form.newQuestion,
      true_answer_text: props.form.newTrueAnswer,
      false_answer_text: props.form.newFalseAnswer,
    };

    const questionMessageText = props.form.newQuestion;

    evt.preventDefault();
    inputChange(newQuizQuestion);
    postQuiz(newQuizPost, questionMessageText);
  };

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input
        maxLength={50}
        value={props.form.newQuestion}
        name="newQuestion"
        onChange={handleChange}
        id="newQuestion"
        placeholder="Enter question"
      />
      <input
        maxLength={50}
        value={props.form.newTrueAnswer}
        name="newTrueAnswer"
        onChange={handleChange}
        id="newTrueAnswer"
        placeholder="Enter true answer"
      />
      <input
        maxLength={50}
        value={props.form.newFalseAnswer}
        name="newFalseAnswer"
        onChange={handleChange}
        id="newFalseAnswer"
        placeholder="Enter false answer"
      />
      <button
        id="submitNewQuizBtn"
        disabled={
          props.form.newQuestion.trim().length >= 2 &&
          props.form.newTrueAnswer.trim().length >= 2 &&
          props.form.newFalseAnswer.trim().length >= 2
            ? false
            : true
        }
      >
        Submit new quiz
      </button>
    </form>
  );
}

export default connect((state) => state, { inputChange, postQuiz })(Form);
