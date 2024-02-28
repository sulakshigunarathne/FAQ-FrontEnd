import React, { useState } from "react";
import {TETabs,TETabsContent,TETabsItem,TETabsPane} from "tw-elements-react";
import Question from "../Components/Question.tsx";

export default function QuestionView(): JSX.Element {

  const [fillActive, setFillActive] = useState("all");

  const handleFillClick = (value: string) => {
    if (value === fillActive) {
      return;
    }
    setFillActive(value);
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
          <Question Que={"All q"}/>
        </TETabsPane>
        <TETabsPane show={fillActive === "my"}>
          <Question Que={"My q"}/>
        </TETabsPane>
      </TETabsContent>
    </div>

    </div>
    
  );
}