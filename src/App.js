import "./App.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { useDispatch } from "react-redux";
import { openOrCloseINput } from "./redux/slices/inputSlice";
function App() {
  let dispatch = useDispatch();
  return (
    <div
      className="App"
      onClick={() => {
        dispatch(openOrCloseINput(false));
      }}
    >
      <header>
        <Navbar />
      </header>
      <main>
        <Main />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
