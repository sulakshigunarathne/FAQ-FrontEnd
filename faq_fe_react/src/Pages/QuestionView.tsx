import { useEffect, useState } from "react";
import {TETabs,TETabsContent,TETabsItem,TETabsPane} from "tw-elements-react";
import Question from "../Components/Question";
import AnswerView from "./AnswerView";
import axios from "axios";

interface QuestionType {
  // Define the structure of a question
  id: number;
  // other properties...
}

export default function QuestionView() {

  const [fillActive, setFillActive] = useState("all");
  const [questions, setQuestions] = useState([]);
  const [selectedQuestionID, setSelectedQuestionID] = useState<number | null>(null);

  useEffect(() =>{

    const fetchQuestionbyID = async () => {
      try {
        const response = await axios.get('https://backend-api.com/questions')
        setQuestions(response.data);
      }catch (error) {
        console.error('Error fetching questions:', error);
      }
    };
      fetchQuestionbyID();
  }, []);

  const handleFillClick = (value: string) => {
    if (value === fillActive) {
      return;
    }
    setFillActive(value);
    setSelectedQuestionID(null);
  };

  const handleViewQuestion = (questionID) => {
    setSelectedQuestionID(questionID);
  };

  return (
    <div className="mx-auto items-center content-center flex justify-center">
      <div className="m-5 w-1/2 self-center">
      <TETabs fill>
        <TETabsItem
          onClick={() => handleFillClick("all")}
          active={fillActive === "all"}
        >
          All Questions
        </TETabsItem>
        <TETabsItem
          onClick={() => handleFillClick("my")}
          active={fillActive === "my"}
        >
          My Questions
        </TETabsItem>
        
      </TETabs>

      <TETabsContent>
        <TETabsPane show={fillActive === "all"}>
          <Question questions={questions} onView={handleViewQuestion} />
        </TETabsPane>
        <TETabsPane show={fillActive === "my"}>
        <Question questions={questions} onView={handleViewQuestion} />
        </TETabsPane>
      </TETabsContent>

      {selectedQuestionID && (
          <AnswerView questionID = {selectedQuestionID} />
        )}
    </div>

    </div>
    
  );
}