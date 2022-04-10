import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {

    const [questionArr, setQuestionArr] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then(resp => resp.json())
      .then((questions) => {
        // console.log(questions)
        setQuestionArr(questions)
      })
  }, [])

  const handleDeletedItem = (id) => {
    fetch(`http://localhost:4000/questions/${id}`, {method: "DELETE"})
    .then(r => r.json())
    .then(() => {
      const deletedList = questionArr.filter(question => question.id !== id)
      setQuestionArr(deletedList)
    })
  }

  const handleChangedItem = (question, e) => {
    console.log(e)
    const newAnswer = parseInt(e.target.value)
    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({"correctIndex": newAnswer})
    }

   fetch(`http://localhost:4000/questions/${question.id}`, configObj)
   .then(r => r.json())
   .then(updatedQuestion => {
    const updatedQuestions = questionArr.map(question => {
      if (question.id === updatedQuestion.id){
        return updatedQuestion
      }else {
        return question
      }
    })
    setQuestionArr(updatedQuestions)
   })
  }

  const allQuestions = questionArr.map(question =>
  (<QuestionItem
    key={question.id}
    question={question}
    handleDeletedItem={handleDeletedItem}
    handleChangedItem={handleChangedItem}
  />)
  )

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{allQuestions}</ul>
    </section>
  );
}

export default QuestionList;

        // setQuestionArr(allQuestions)
        // console.log(allQuestions)

