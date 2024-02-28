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
      
    <div className='my-5'>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<FaqQuestions />}/>
      <Route path='/askquestion' element={<AskQuestionForm />}/>
    </Routes>
      
    </BrowserRouter>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
