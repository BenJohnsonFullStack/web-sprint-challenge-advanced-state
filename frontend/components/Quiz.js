import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchQuiz, selectAnswer } from "../state/action-creators";

export function Quiz(props) {
  const { fetchQuiz, selectAnswer } = props;

  useEffect(() => {
    fetchQuiz();
  }, []);

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

            <button id="submitAnswerBtn" onClick={fetchQuiz}>
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

export default connect((state) => state, { fetchQuiz, selectAnswer })(Quiz);
