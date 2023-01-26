import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary App</h1>
        </header>
        <Dictionary />
        <footer>
          Built by{" "}
          <a
            href="https://www.linkedin.com/in/sarah-barter-6383b196/"
            target="_blank"
            rel="noreferrer"
          >
            Sarah Barter
          </a>{" "}
          and open-sourced on{" "}
          <a
            href="https://github.com/barty-s/react_dictionary_app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
