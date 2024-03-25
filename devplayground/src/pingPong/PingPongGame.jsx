/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { PingPong } from "./PingPong";
import { Campo } from "./Campo";
import { Paddle } from "./Paddle";
import { Ball } from "./Ball";
import { Punteggio } from "./Punteggio";

export function PingPongGame() {
  const [getTop, setTop] = useState(50);
  const [getLeft, setLeft] = useState(50);
  const [verticalDirection, setVerticalDirection] = useState(4);
  const [horizontalDirection, setHorizontalDirection] = useState(3);
  const [score, setScore] = useState({ player: 0, opponent: 0 });
  let [paddleLeftY, setPaddleLeftY] = useState(115);
  let [paddleRightY, setPaddleRightY] = useState(115);
  const larghezzaCampo = 900;
  const altezzaCampo = 450;
  

  // Funzione per controllare se la pallina ha colpito un paddle
  

  useEffect(() => {
    const interval = setInterval(() => {
      setTop((prevTop) => {
        let newTop = prevTop + verticalDirection;
        if (newTop >= altezzaCampo - 15 || newTop <= 0) {
          newTop = prevTop;
          setVerticalDirection(-verticalDirection);
        }
        return newTop;
      });

      setLeft((prevLeft) => {
        let newLeft = prevLeft + horizontalDirection;
        const ballPos = { x: newLeft, y: getTop };
        const paddleLeftPos = { x: 0, y: paddleLeftY };
        const paddleRightPos = { x: larghezzaCampo - 10, y: paddleRightY };
        const paddleHeight = 70;
        const paddleWidth = 10;
        const ballSize = 15;

        if (
          checkPaddleHit(
            ballPos,
            paddleLeftPos,
            paddleHeight,
            paddleWidth,
            ballSize
          ) ||
          checkPaddleHit(
            ballPos,
            paddleRightPos,
            paddleHeight,
            paddleWidth,
            ballSize
          )
        ) {
          newLeft = prevLeft;
          setHorizontalDirection(-horizontalDirection);
        } else if (newLeft <= 0 || newLeft >= larghezzaCampo) {
          if (newLeft <= 0) {
            setScore((score) => ({ ...score, opponent: score.opponent + 1 }));
          } else {
            setScore((score) => ({ ...score, player: score.player + 1 }));
          }
          newLeft = 50;
        }
        return newLeft;
      });

      setPaddleRightY((prevY) => {
        const deltaY = getTop - prevY - 35;
        if (deltaY > 0) {
          return Math.min(prevY + 10, altezzaCampo);
        } else if (deltaY < 0) {
          return Math.max(prevY - 10, 0);
        }
        return prevY;
      });
    }, 25);

    return () => clearInterval(interval);
  }, [getTop, verticalDirection, horizontalDirection]);

  return (
    <div tabIndex={0}>
      <Punteggio player={score.player} opponent={score.opponent} />
      <PingPong>
        <Campo
          style={{ width: `${larghezzaCampo}px`, height: `${altezzaCampo}px` }}
        >
          <Paddle
            position="left"
            style={{ top: `${paddleLeftY}px`, left: "0" }}
          />
          <Paddle
            position="right"
            style={{ top: `${paddleRightY}px`, right: "0" }}
          />
          <Ball style={{ top: `${getTop}px`, left: `${getLeft}px` }} />
        </Campo>
      </PingPong>
      <button onClick={audio.play()}>Debug</button>
    </div>
  );
}
