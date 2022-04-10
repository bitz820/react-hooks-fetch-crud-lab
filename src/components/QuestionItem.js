import React from "react";

function QuestionItem({ question, handleDeletedItem, handleChangedItem }) {
  const { id, prompt, answers, correctIndex } = question;
// console.log(question)
// console.log(answers)
  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  const handleDeleteClick = () => {
    // console.log("clicked!")
    // console.log(id)
    handleDeletedItem(id)
  }

  const handleChange = (e) => {
    console.log("hi")
    handleChangedItem(question, e)
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={handleChange} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
