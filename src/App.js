import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./screens/Home";
import { Volunteering } from "./screens/Volunteering";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Voluntarios" element={<Volunteering />} />
      </Routes>
    </Router>
  )
}
