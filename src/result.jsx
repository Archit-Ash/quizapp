import React from "react";

function Result({ score }) {
  return (
    <div>
      <h2>Quiz Completed!</h2>
      <h4> Your Score:</h4>
      <h1>{score}</h1>
    </div>
  );
}

export default Result;
