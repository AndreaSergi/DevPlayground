import { TrisLogo } from "./TrisLogo";
import { TrisButton } from "./TrisButton";
import style from "./Tris.module.css";

export function Tris() {
  return (
      <div className={style.page}>
        <div className={style.container}>
          <TrisLogo />
          <TrisButton>3x3</TrisButton>
          <TrisButton>Player vs Player</TrisButton>
          <TrisButton>Rules</TrisButton>
        </div>
        <div className={style.themeButton}>
          <TrisButton>Dark/Light</TrisButton>
        </div>
      </div>
  );
}
