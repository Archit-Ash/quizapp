import React, { useState } from "react";

function Question({ question, handleAnswerSubmission }) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    if (!selectedOption) {
      alert("please choose an answer");
    } else {
      handleAnswerSubmission(selectedOption);
      setSelectedOption("");
    }
  };

  return (
    <div>
      <h2>{question.text}</h2>
      <ul>
        {question.options.map((options, index) => (
          <li key={index}>
            <input
              type="radio"
              id={index}
              name="options"
              value={options}
              checked={selectedOption === options}
              onChange={() => handleOptionChange(options)}
            />
            <label className="custom-radio" htmlFor={index}>
              {options}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
export default Question;
