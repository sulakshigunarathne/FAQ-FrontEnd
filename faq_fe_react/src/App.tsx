import './App.css';
import Header from 'Components/Header';
import { Switch } from '@mui/material';
import FaqQuestions from 'Components/FaqQuestions';
import Footer from 'Components/Footer';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import AskQuestionForm from 'Components/AskQuestionForm';

function App() {
  return (
    <div className="App">
    <Header/>
    <FaqQuestions />
    <Footer/>
      
    <BrowserRouter>
    <Routes>
      <Route path='/askquestion' element={<AskQuestionForm />}>
        {/* <AskQuestionForm /> */}
      </Route>
    </Routes>
      
    </BrowserRouter>
    </div>
  );
}

export default App;
