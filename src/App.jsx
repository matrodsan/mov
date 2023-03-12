//IMPORT OS STYLES
import { Outlet } from "react-router-dom";
import "./App.css";

//IMPORT OF COMPONENTS
import Navbar from "./components/Navbar/Navbar";
import Search from "./pages/Search/Search";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
