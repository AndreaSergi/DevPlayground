import { Routes, Route, Link } from "react-router-dom";
import { Tris } from "./tris/Tris";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Link to="/tris">Tris</Link>} />
      <Route path="/tris" element={<Tris />} />
      <Route path="/tris/game" element={<p>game</p>} />
    </Routes>
  );
}
