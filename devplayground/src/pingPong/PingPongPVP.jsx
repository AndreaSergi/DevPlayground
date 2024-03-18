/* eslint-disable no-unused-vars */
import React, { useState, useEffect, createContext, StrictMode } from "react";
import { PingPong } from "./PingPong";
import { Campo } from "./Campo";
import { Paddle } from "./Paddle";
import { Ball } from "./Ball";
import { Punteggio } from "./Punteggio";
import './pingpong.css'

export function PingPongPVP() {
  const [getTop, setTop] = useState(50);
  const [getLeft, setLeft] = useState(50);
  const [verticalDirection, setVerticalDirection] = useState(4);
  const [horizontalDirection, setHorizontalDirection] = useState(3);
  const [score, setScore] = useState({ player: 0, opponent: 0 });
  let [paddleLeftY, setPaddleLeftY] = useState(115);
  let [paddleRightY, setPaddleRightY] = useState(115);
  const larghezzaCampo = 900
  const altezzaCampo = 450
  const nameGiocatore1 = "Giocatore1"
  const nameGiocatore2 = "Giocatore2"

  // Funzione per controllare se la pallina ha colpito un paddle
  const checkPaddleHit = (
    ballPos,
    paddlePos,
    paddleHeight,
    paddleWidth,
    ballSize
  ) => {
    const ballLeft = ballPos.x;
    const ballRight = ballPos.x + ballSize;
    const ballTop = ballPos.y;
    const ballBottom = ballPos.y + ballSize;

    const paddleLeft = paddlePos.x;
    const paddleRight = paddlePos.x + paddleWidth;
    const paddleTop = paddlePos.y;
    const paddleBottom = paddlePos.y + paddleHeight;

    return (
      ballRight >= paddleLeft &&
      ballLeft <= paddleRight &&
      ballBottom >= paddleTop &&
      ballTop <= paddleBottom
    );
  };

  useEffect(() => {
    // Funzione per controllare i padlle
  const handleKeyDown = (event) => {
    if (event.key === "w") {
      setPaddleLeftY((paddleLeftY) => Math.max(paddleLeftY - 10, 0));
    } else if (event.key === "s") {
      setPaddleLeftY((paddleLeftY) => Math.min(paddleLeftY + 10, altezzaCampo - 70));
    }
    if (event.key === "ArrowUp") {
        setPaddleRightY((paddleRightY) => Math.max(paddleRightY - 10, 0));
      } else if (event.key === "ArrowDown") {
        setPaddleRightY((paddleRightY) => Math.min(paddleRightY + 10, altezzaCampo - 70));
      }
  };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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

      
    }, 25);

    return () => clearInterval(interval);
  }, [getTop, verticalDirection, horizontalDirection]);

  const styleMod = {
    top: `${getTop}px`,
    left: `${getLeft}px`,
  };

  // Funzione per controllare i padlle

  const [key, setKey] = useState(null);
  const [e, setE] = useState(0);

  function handleKeyDown(event) {
    setKey(event.key);
    setE(e + 1);
  }
  useEffect(() => {
    if (key == "arrowUp") {
      setPaddleLeftY(paddleLeftY - 10);
      console.log(paddleLeftY);
    }
    if (key == "arrowDown") {
      setPaddleLeftY(paddleLeftY + 10);
      console.log(paddleLeftY);
    }

    console.log(key);
  }, [e]);
  return (
    <div tabIndex={0} onKeyDown={handleKeyDown}>
      <Punteggio player={score.player} opponent={score.opponent} namePlayer1={nameGiocatore1} namePlayer2={nameGiocatore2}/>
      <PingPong>
        <Campo style={{width: `${larghezzaCampo}px`, height: `${altezzaCampo}px`}}>
          <Paddle
            position="left"
            style={{ top: `${paddleLeftY}px`, left: "0" }}
          />
          <Paddle
            position="right"
            style={{ top: `${paddleRightY}px`, right: "0" }}
          />
          <Ball style={styleMod} />
        </Campo>
      </PingPong>
    </div>
  );
}
