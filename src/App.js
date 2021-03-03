import logo from './logo.svg';
// import wood from './images/backgrounds/back-wood.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p>
          Mix n Match
        </p>
        {/* <img src={wood} alt=""/> */}
        <img src={logo} className="App-logo" alt="logo" />


      </header>
    </div>
  );
}

export default App;
