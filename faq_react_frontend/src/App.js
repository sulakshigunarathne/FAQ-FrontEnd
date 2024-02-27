import "./App.css";
import FaqQuestions from "./Components/FaqQuestions.tsx";

function App() {
  return (
    <div className="App">
      <div>
        <h1 className="text-6xl text-red-500">Hello</h1>
        <Header />
      </div>
      <FaqQuestions />
    </div>
  );
}

export default App;
