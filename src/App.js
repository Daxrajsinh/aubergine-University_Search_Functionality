import './App.css';
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import University from "./University";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/university/:name" element={<University />} />
    </Routes>
  );
}

export default App;