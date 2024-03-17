import { Routes, Route, Link } from "react-router-dom";
import { Tris } from "./tris/Tris";
import { TrisMenu } from "./tris/TrisMenu/TrisMenu";
import { TrisGame } from "./tris/TrisGame/TrisGame";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Link to="/tris">Tris</Link>} />
      <Route path="tris" element={<Tris />}>
        <Route index element={<TrisMenu />} />
        <Route path="game" element={<TrisGame />} />
      </Route>
    </Routes>
  );
}
