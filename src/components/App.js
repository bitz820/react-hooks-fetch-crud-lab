import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  // const [questionArr, setQuestionArr] = useState([])

  // const updateNewQuestion = (newObj) => {
    // setQuestionArr([...questionArr, newObj])
  // }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? 
      <QuestionForm 
      // updateNewQuestion={updateNewQuestion}
      /> : 
      <QuestionList 
      // questionArr={questionArr} setQuestionArr={setQuestionArr}
      />}
    </main>
  );
}

export default App;
