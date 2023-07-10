import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { fetchQuiz, selectAnswer } from "../state/action-creators";

export function Quiz(props) {
  const { fetchQuiz } = props;

  useEffect(() => {
    fetchQuiz();
  }, []);

  const handleSelectAnswer = (e) => {
    selectAnswer(e.target);
  };

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        props.quiz !== null ? (
          <>
            <h2>{props.quiz.question}</h2>

            <div id="quizAnswers">
              <div className="answer selected">
                {props.quiz.answers[0].text}
                <button onClick={handleSelectAnswer}>Select</button>
              </div>

              <div className="answer">
                {props.quiz.answers[1].text}
                <button onClick={handleSelectAnswer}>Select</button>
              </div>
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
