//IMPORT OS STYLES
import "./App.css";

//IMPORT OF COMPONENTS
import Navbar from "./components/Navbar/Navbar";
import Trendings from "./pages/Trendings/Trendings";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Trendings />
    </div>
  );
}

export default App;
