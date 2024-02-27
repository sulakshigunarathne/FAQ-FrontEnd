import Questions from "../FaqRecords/FaqQuestion.json";
import React from "react";

export default function FaqQuestions() {
  return (
    <div>
      {Questions &&
        Questions.map((q) => {
          return (
            <div className="box" key={q.id}>
              {q.question}
              <br />
              {q.answer}
              <br />
              <br />
            </div>
          );
        })}
    </div>
  );
}
