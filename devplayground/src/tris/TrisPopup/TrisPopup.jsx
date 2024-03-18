import style from "./TrisPopup.module.css";

export function TrisPopup({ onCloseButtonClick }) {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <p>The game takes place on a grid made up of 3x3 squares.</p>
        <p>Player 1's symbol is X and his opponent's is O.</p>
        <p>
          Be the first to place 3 or 4 symbols in a row (horizontally,
          vertically or diagonally) to win.
        </p>
        <p>
          The game ends when all the boxes have been filled or when someone gets
          three of a kind.
        </p>
        <div className={style.closeButton} onClick={onCloseButtonClick}>
          X
        </div>
      </div>
    </div>
  );
}
