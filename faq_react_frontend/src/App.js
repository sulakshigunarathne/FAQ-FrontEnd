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
      
    </div>
  );
}

export default App;
