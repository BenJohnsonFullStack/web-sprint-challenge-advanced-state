import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchQuiz, selectAnswer, setMessage } from "../state/action-creators";
import { Message } from "./Message";

export function Quiz(props) {
  const { fetchQuiz, selectAnswer, setMessage } = props;

  useEffect(() => {
    fetchQuiz();
  }, []);

  const submitMessage = (message) => {
    fetchQuiz();
    setMessage(message);
  };

  const setAnswerId = (id) => {
    selectAnswer(id);
  };

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        props.quiz !== null ? (
          <>
            <h2>{props.quiz.question}</h2>

            <div id="quizAnswers">
              {props.quiz.answers.map((answer, idx) => {
                return (
                  <div
                    key={idx}
                    className={`answer ${
                      props.selectedAnswer === answer.answer_id
                        ? "selected"
                        : ""
                    }`}
                  >
                    {answer.text}
                    <button onClick={() => setAnswerId(answer.answer_id)}>
                      {props.selectedAnswer === answer.answer_id
                        ? "SELECTED"
                        : "Select"}
                    </button>
                  </div>
                );
              })}
            </div>

            <button id="submitAnswerBtn" onClick={submitMessage}>
              Submit answer
            </button>
          </>
        ) : (
          "Loading next quiz..."
        )
      }
    </div>
  );
}

export default connect((state) => state, {
  fetchQuiz,
  selectAnswer,
  setMessage,
})(Quiz);
