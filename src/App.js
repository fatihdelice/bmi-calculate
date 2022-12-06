import { Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home";
import WhatIsBMI from "./pages/WhatIsBMI";

function App() {
  return (
    <div className="app">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/what">What is BMI</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="what" element={<WhatIsBMI />} />
      </Routes>
    </div>
  );
}

export default App;
