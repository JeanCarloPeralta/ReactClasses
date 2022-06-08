import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Jean Carlo Peralta
        </p>
        <a
          className="App-link"
          href="https://google.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact!
        </a>
      </header>
    </div>
  );
}

export default App;
