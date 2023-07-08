import React, { useState } from "react";
import { connect } from "react-redux";
import { inputChange } from "../state/action-creators";

export function Form(props) {
  const [question, setQuestion] = useState(props.form.newQuestion);
  const [trueAnswer, setTrueAnswer] = useState(props.form.newTrueAnswer);
  const [falseAnswer, setFalseAnswer] = useState(props.form.newFalseAnswer);
  const { inputChange } = props;

  const formUpdate = () => {
    inputChange({
      newQuestion: question,
      newTrueAnswer: trueAnswer,
      newFalseAnswer: falseAnswer,
    });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    formUpdate();
    setQuestion("");
    setTrueAnswer("");
    setFalseAnswer("");
  };

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input
        maxLength={50}
        value={question}
        onChange={(e) => setQuestion(e.target.value.trim())}
        id="newQuestion"
        placeholder="Enter question"
      />
      <input
        maxLength={50}
        value={trueAnswer}
        onChange={(e) => setTrueAnswer(e.target.value.trim())}
        id="newTrueAnswer"
        placeholder="Enter true answer"
      />
      <input
        maxLength={50}
        value={falseAnswer}
        onChange={(e) => setFalseAnswer(e.target.value.trim())}
        id="newFalseAnswer"
        placeholder="Enter false answer"
      />
      <button
        id="submitNewQuizBtn"
        disabled={
          question.length <= 1 ||
          trueAnswer.length <= 1 ||
          falseAnswer.length <= 1
            ? true
            : false
        }
      >
        Submit new quiz
      </button>
    </form>
  );
}

export default connect((state) => state, { inputChange })(Form);
