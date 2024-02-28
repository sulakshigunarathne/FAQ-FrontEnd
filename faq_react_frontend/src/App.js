import './App.css';
import Header from './Components/Header.tsx';
import Questions from './Components/Questions.tsx';

function App() {
  return (
    <div className="App">
      <div>
        <h1 className='text-6xl text-red-500'>Hello</h1>
        <Header/>
      </div>
      <Questions/>
    
    </div> 
  );
}

export default App;
