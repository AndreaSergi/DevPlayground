import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Button } from './Button';
import './Home.css';
import PingPongPVCOM from './PingPongPVCOM';
import PingPongPVP from './PingPongPVP';

export function Home() {
  return (
    <Router>
      <div className="container">
        <Link to="/pvcpu">
          <Button className="pvcom" text="Player VS CPU" />
        </Link>
        <Link to="/pvp">
          <Button className="pvp" text="Player VS Player" />
        </Link>
      </div>
      <Routes>
        <Route path="/pvcpu" element={<PingPongPVCOM />} />
        <Route path="/pvp" element={<PingPongPVP />} />
      </Routes>
    </Router>
  );
}


