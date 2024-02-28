import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import AskQuestionForm from './Components/AskQuestionForm.tsx';

import './App.css';
import Header from './Components/Header.tsx';
import Footer from './Components/Footer.tsx';
import FaqQuestions from "./Components/FaqQuestions.tsx";

import QuestionView from './Pages/QuestionView.tsx';

function App() {
  return (
    <div className="App">
    <Header/>
    <FaqQuestions />
    <Footer/>
      
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
