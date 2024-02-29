import './App.css';
import Header from 'Components/Header';
import { Switch } from '@mui/material';
import FaqQuestions from 'Components/FaqQuestions';
import Footer from 'Components/Footer';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import AskQuestionForm from 'Components/AskQuestionForm';
import AskQBanner from 'Components/AskQBanner';
function App() {
  return (
    <div className="App">
    <Header/>  
      
    <div>
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<><AskQBanner/><FaqQuestions /></>}/>
      <Route path='/askquestion' element={<AskQuestionForm />}/>
    </Routes>
    
    </BrowserRouter>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
