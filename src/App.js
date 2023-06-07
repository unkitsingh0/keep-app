import "./App.css";
import Keep from "./components/Keep";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Keep />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
