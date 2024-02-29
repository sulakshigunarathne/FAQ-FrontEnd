import { useState } from "react";
import {
  TETabs,
  TETabsContent,
  TETabsItem,
  TETabsPane,
} from "tw-elements-react";
import { useNavigate } from "react-router-dom";

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
            <div className="mt-5 mx-auto items-center content-center flex justify-center">
              <div className="flex justify-between self-center bg-gray-100 border rounded p-4 my-2 m-5 w-5/6">
                <p className="">Question 1</p>
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
          </TETabsPane>
          <TETabsPane show={fillActive === "my"}>
            <div className="mt-5 mx-auto items-center content-center flex justify-center">
              <div className="flex justify-between self-center bg-gray-100 border rounded p-4 my-2 m-5 w-5/6">
                <p className="">My Question 1</p>
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
          </TETabsPane>
        </TETabsContent>
      </div>
    </div>
  );
}
