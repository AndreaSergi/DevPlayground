import style from "./TrisPopup.module.css";

export function TrisPopup({ onCloseButtonClick }) {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <p>Il gioco si svolge su una griglia composta da 3x3 caselle.</p>
        <p>
          Disponi per primo 3 o 4 simboli in fila (orizzontale, verticale o
          diagonale) per vincere.
        </p>
        <p>Il simbolo del giocatore 1 è X e quello dell'avversario è O.</p>
        <p>Il gioco termina quando tutte le caselle sono state riempite o quando qualcuno fa tris.</p>
        <div className={style.closeButton} onClick={onCloseButtonClick}>X</div>
      </div>
    </div>
  );
}
