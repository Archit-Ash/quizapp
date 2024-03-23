import React, { useState } from "react";
import quizData from "./quizData";
import Question from "./question";
import Result from "./result";
function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSubmission = (selectedOption) => {
    const currentQuestion = quizData[currentQuestionIndex];
    if (currentQuestion.correct === selectedOption) {
      setScore(score + 1);
    }
    if (currentQuestionIndex + 1 < quizData.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizCompleted(false);
  };

  return (
    <div>
      {!quizCompleted ? (
        <Question
          question={quizData[currentQuestionIndex]}
          handleAnswerSubmission={handleAnswerSubmission}
        />
      ) : (
        <Result score={score} />
      )}
      <button onClick={restartQuiz}>Restart</button>
    </div>
  );
}

export default Quiz;
