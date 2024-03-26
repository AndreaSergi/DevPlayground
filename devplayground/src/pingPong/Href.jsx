import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Home } from "./Home";
import PingPongPVCOM from "./PingPongPVCOM";
import PingPongPVP from "./PingPongPVP";


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