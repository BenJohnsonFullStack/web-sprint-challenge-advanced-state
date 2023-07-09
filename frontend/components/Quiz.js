import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchQuiz } from "../state/action-creators";

export function Quiz(props) {
  const { fetchQuiz } = props;

  useEffect(() => {
    fetchQuiz();
  }, []);

  console.log(props.quiz);

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
                <button>SELECTED</button>
              </div>

              <div className="answer">
                {props.quiz.answers[1].text}
                <button>Select</button>
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

export default connect((state) => state, { fetchQuiz })(Quiz);
