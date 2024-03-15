import { TrisLogo } from "./TrisLogo";
import { TrisButton } from "./TrisButton";

export function Tris() {
  return (
    <div>
      <TrisLogo />
      <TrisButton>3x3</TrisButton>
      <TrisButton>Player vs Player</TrisButton>
      <TrisButton>Rules</TrisButton>
      <TrisButton>Dark/Light</TrisButton>
    </div>
  );
}
