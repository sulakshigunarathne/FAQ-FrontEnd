import './App.css';
import Header from './Components/Header.tsx';
import QuestionView from './Pages/QuestionView.tsx';

function App() {
  return (
    <div className="App">
      <div>
        <h1 className='text-6xl text-red-500'>Hello</h1>
        <Header/>
      </div>
      <QuestionView/>
    
    </div> 
  );
}

export default App;
