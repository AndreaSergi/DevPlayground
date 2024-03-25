import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Home.css";


export function Home() {

  const styleLogo = {
    height: "150px",
    marginBottom: "80px"
  }

  return (
    <div className="container">
      <img style={styleLogo} src="/pingpong/img/ic.svg"/>
      <Link to="/pvcpu">
        <Button className="pvcom" text="Player VS CPU" />
      </Link>
      <Link to="/pvp">
        <Button className="pvp" text="Player VS Player" />
      </Link>
    </div>
  );
}
