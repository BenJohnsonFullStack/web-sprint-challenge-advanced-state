import React from "react";
import { connect } from "react-redux";
import { inputChange } from "../state/action-creators";
import { useLocalStorage } from "../hooks/useLocalStorage";

export function Form(props) {
  const [question, setQuestion] = useLocalStorage(
    "question",
    props.form.newQuestion
  );
  const [trueAnswer, setTrueAnswer] = useLocalStorage(
    "trueAnswer",
    props.form.newTrueAnswer
  );
  const [falseAnswer, setFalseAnswer] = useLocalStorage(
    "falseAnswer",
    props.form.newFalseAnswer
  );
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
        onChange={(e) => setQuestion(e.target.value)}
        id="newQuestion"
        placeholder="Enter question"
      />
      <input
        maxLength={50}
        value={trueAnswer}
        onChange={(e) => setTrueAnswer(e.target.value)}
        id="newTrueAnswer"
        placeholder="Enter true answer"
      />
      <input
        maxLength={50}
        value={falseAnswer}
        onChange={(e) => setFalseAnswer(e.target.value)}
        id="newFalseAnswer"
        placeholder="Enter false answer"
      />
      <button
        id="submitNewQuizBtn"
        disabled={
          question.trim().length >= 2 &&
          trueAnswer.trim().length >= 2 &&
          falseAnswer.trim().length >= 2
            ? false
            : true
        }
      >
        Submit new quiz
      </button>
    </form>
  );
}

export default connect((state) => state, { inputChange })(Form);
