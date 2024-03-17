import { Link } from "react-router-dom";
import style from "./TrisButton.module.css";

export function TrisButton({ children, onClick, link }) {
  function handleClick(event) {
    event.preventDefault();
    onClick();
  }

  return (
    <>
      {link ? (
        <Link to={link} className={style.button}>
          {children}
        </Link>
      ) : (
        <a className={style.button} onClick={handleClick}>
          {children}
        </a>
      )}
    </>
  );
}
