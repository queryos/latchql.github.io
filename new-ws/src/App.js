import Navbar from "./Components/Navbar";
import Home from "./Components/Home";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
        color: "white",
      }}
    >
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
