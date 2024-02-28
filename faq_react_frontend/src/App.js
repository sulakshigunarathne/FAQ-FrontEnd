import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import AskQuestionForm from './Components/AskQuestionForm.tsx';

import './App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Switch>
      <Route path='/askquestion'>
        <AskQuestionForm />
      </Route>
    </Switch>
      
    </BrowserRouter>
    </div>
  );
}

export default App;
