import logo from './logo.svg';
import './App.css';
import './nivoTutorial'
import ScatterPlot from "./nivoTutorial";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div className="title">
              <h1>Scatter plot</h1>
          </div>
        <div>
          <ScatterPlot/>
        </div>
      </header>
    </div>
  );
}

export default App;
