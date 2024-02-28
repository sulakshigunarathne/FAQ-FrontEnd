import React from "react";
import "./AskQuestionForm.css"

function AskQuestionForm(){
    return(
    <div className="askQformContainer">
        <h1>Ask a public question</h1>
         <form>
            <div>
                <label htmlFor="question">Question</label><br/>
                <input type="text" id="question" name="question" required /><br/>
            </div>
           
            <div>
                <label htmlFor="questionDescription">Question Description</label><br/>
                <textarea id="questionDescription" name="questionDescription" className="questionDescriptionInput" /><br/>
            </div>
            
            <div>
                <label htmlFor="keyword">Keywords</label><br/>
                <input type="text" id="keyword" name="keyword" /><br/>
            </div>
            
            <div className="buttons">
                <button type="submit" className="submit">Post your Question</button>
                <button type="button" className="cancel">Close</button>
            </div>
          
        </form>

    </div>
   );
}

export default AskQuestionForm;
