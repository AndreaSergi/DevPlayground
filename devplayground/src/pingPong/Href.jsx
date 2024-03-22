import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import PingPongPVCOM from "./PingPongPVCOM";
import PingPongPVP from "./PingPongPVP";
import { Home } from "./Home";

export function Href() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pvcpu" element={<PingPongPVCOM />} />
        <Route path="/pvp" element={<PingPongPVP />} />
      </Routes>
    </Router>
  );
}
