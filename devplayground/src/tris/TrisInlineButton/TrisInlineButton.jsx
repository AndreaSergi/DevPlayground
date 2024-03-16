import style from "./TrisInlineButton.module.css";

export function TrisInlineButton({ children, onClick }) {
  function handleClick(event) {
    event.preventDefault();
    onClick();
  }

  return <a className={style.button} onClick={handleClick}>{children}</a>;
}
