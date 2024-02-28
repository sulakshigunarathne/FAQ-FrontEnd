import './App.css';
import Header from 'Components/Header';
import { Switch } from '@mui/material';
import FaqQuestions from 'Components/FaqQuestions';
import Footer from 'Components/Footer';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import AskQuestionForm from 'Components/AskQuestionForm';
import AskQBanner from 'Components/AskQBanner';
import QuestionView from 'Pages/QuestionView';
import AnswerView from 'Pages/AnswerView';
function App() {
  return (
    <div className="App">
    <Header/>  
    
    <div className='my-5'>
    
    <BrowserRouter>
    
    <Routes>
    
      <Route path='/' element={<><AskQBanner /><FaqQuestions /></>}/>
      <Route path='/askquestion' element={<AskQuestionForm />}/>
      <Route path='/question-view' element = {<QuestionView/>} />
      <Route path='/answer-view' element= {<AnswerView/>} />
    </Routes>
    
    </BrowserRouter>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
