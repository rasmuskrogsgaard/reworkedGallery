import Frontpage from "./components/Frontpage";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Frontpage />} />
      </Routes>
  
  );
}

export default App;
