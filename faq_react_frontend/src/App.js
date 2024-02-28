import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AskQuestionForm from './Components/AskQuestionForm.tsx';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/askquestion" element={<AskQuestionForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
