import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./screens/Home";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}
