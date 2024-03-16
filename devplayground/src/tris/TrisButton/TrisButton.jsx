import style from "./TrisButton.module.css";

export function TrisButton({ children, onClick }) {
  function handleClick(event) {
    event.preventDefault();
    onClick();
  }

  return <a className={style.button} onClick={handleClick}>{children}</a>;
}
