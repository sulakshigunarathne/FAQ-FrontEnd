import myBackgroundImage from "../Assets/Images/FAQ_background.png";
import { useState } from "react";
import {
  TETabs,
  TETabsContent,
  TETabsItem,
  TETabsPane,
} from "tw-elements-react";
import { useNavigate } from "react-router-dom";


const questionData = [
  {
    "id": 1,
    "question": "Where are Eyepax’s offices located?",
    "answer": "Eyepax has offices in Colombo, Stockholm, Las Vegas, Paris, and Ho Chi Minh. Our development centers are in Colombo, Sri Lanka, and Ho Chi Minh, Vietnam. Additionally, we have business centers in Stockholm (Sweden), Las Vegas (USA), and Paris (France)",
    "description": "This is the description of the question."
  },
  {
    "id": 3,
    "question": "Who are Eyepax’s clients?",
    "answer": "Our clients include startups, multinational enterprises, SMEs, government administrations, public service companies, and leading educational institutions. Notable clients in our portfolio include Expedia, Sinorbis, WesFarmers, New Zealand Safety, Mabi Sweden, Stockholm Public Transport, and many more",
    "description": "This is another question description."
  }
];

const myQuestionData = [
  {
     "id": 1,
    "question": "Where are Eyepax’s offices located?",
    "answer": "Eyepax has offices in Colombo, Stockholm, Las Vegas, Paris, and Ho Chi Minh. Our development centers are in Colombo, Sri Lanka, and Ho Chi Minh, Vietnam. Additionally, we have business centers in Stockholm (Sweden), Las Vegas (USA), and Paris (France)",
    "description": "This is the description of the question."
  }
  
]

export default function QuestionView() {
  const [fillActive, setFillActive] = useState("all");

  const handleFillClick = (value: string) => {
    if (value === fillActive) {
      return;
    }
    setFillActive(value);
  };

  const answerViewHandle = () => {
    Navigate("/answer-view");
  };

  const Navigate = useNavigate();

  return (
    <div
      className={`mx-auto content-center flex justify-center bg-cover bg-center bg-no-repeat h-screen`}
      style={{ backgroundImage: `url(${myBackgroundImage})`,backgroundColor: "rgba(255, 255, 255, 0.5)"}}
    >
      <div className="w-full backdrop-grayscale-0 bg-white/40">
        <div className="w-2/3 mx-auto">
        <TETabs fill >
          <TETabsItem
            onClick={() => handleFillClick("all")}
            active={fillActive === "all"}
            
          >
            <h1 className="font-black">All Questions</h1>
            
          </TETabsItem>
          <TETabsItem
            onClick={() => handleFillClick("my")}
            active={fillActive === "my"}
          >
            <h1 className="font-black">My Questions</h1>
            
          </TETabsItem>
        </TETabs>

        <TETabsContent>
          <TETabsPane show={fillActive === "all"}>
          {questionData.map((question) => (
            <div className="mt-5 mx-auto items-center content-center flex justify-center"  key={question.id}>
              <div className="flex justify-between self-center bg-gray-100 border rounded p-4 my-2 m-5 w-5/6">
                <p className="">{question.question}</p>
                <div>
                  <button
                    className="px-2 py-2 w-auto bg-blue-500 text-white rounded mt-2 hover:bg-blue-600"
                    onClick={answerViewHandle}
                  >
                    View Answer
                  </button>
                </div>
              </div>
            </div>
            ))}
          </TETabsPane>
          <TETabsPane show={fillActive === "my"}>
          {myQuestionData.map((myQuestion) => (
            <div className="mt-5 mx-auto items-center content-center flex justify-center" key={myQuestion.id}>
              <div className="flex justify-between self-center bg-gray-100 border rounded p-4 my-2 m-5 w-5/6">
                <p className="">{myQuestion.question}</p>
                <div>
                  <button
                    className="px-2 py-2 w-auto bg-blue-500 text-white rounded mt-2 hover:bg-blue-600"
                    onClick={answerViewHandle}
                  >
                    View Answer
                  </button>
                </div>
              </div>
            </div>
             ))}
          </TETabsPane>
        </TETabsContent>
        </div>
      </div>
    </div>
  );
}
