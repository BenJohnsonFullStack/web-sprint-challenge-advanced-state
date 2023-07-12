import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchQuiz, postAnswer, selectAnswer } from "../state/action-creators";

export function Quiz(props) {
  const { fetchQuiz, selectAnswer, postAnswer } = props;

  useEffect(() => {
    fetchQuiz();
  }, []);

  const submitAnswer = () => {
    const quizAnswer = {
      quiz_id: props.quiz.quiz_id,
      answer_id: props.selectedAnswer,
    };
    postAnswer(quizAnswer);
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

            <button
              id="submitAnswerBtn"
              onClick={submitAnswer}
              disabled={props.selectedAnswer === null ? true : false}
            >
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
  postAnswer,
})(Quiz);
