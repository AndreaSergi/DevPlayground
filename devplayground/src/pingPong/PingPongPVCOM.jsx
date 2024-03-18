/* eslint-disable no-unused-vars */
import React, { useState, useEffect, createContext, StrictMode } from "react";
import { PingPong } from "./PingPong";
import { Campo } from "./Campo";
import { Paddle } from "./Paddle";
import { Ball } from "./Ball";

export function PingPongPVCOM() {
  const [getTop, setTop] = useState(50);
  const [getLeft, setLeft] = useState(50);
  const [verticalDirection, setVerticalDirection] = useState(2); // Velocità verticale aumentata
  const [horizontalDirection, setHorizontalDirection] = useState(2); // Velocità orizzontale aumentata
  const [score, setScore] = useState(0);
  let [paddleLeftY, setPaddleLeftY] = useState(115); // Posizione iniziale paddle sinistro
  let [paddleRightY, setPaddleRightY] = useState(115); // Posizione iniziale paddle destro

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
    const interval = setInterval(() => {
      setTop((prevTop) => {
        let newTop = prevTop + verticalDirection;
        if (newTop >= 285 || newTop <= 0) {
          newTop = prevTop;
          setVerticalDirection(-verticalDirection);
        }
        return newTop;
      });

      setLeft((prevLeft) => {
        let newLeft = prevLeft + horizontalDirection;
        const ballPos = { x: newLeft, y: getTop };
        const paddleLeftPos = { x: 0, y: paddleLeftY };
        const paddleRightPos = { x: 585, y: paddleRightY };
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
        } else if (newLeft <= 0 || newLeft >= 585) {
          newLeft = 50;
        }
        return newLeft;
      });

      setPaddleRightY((prevY) => {
        const deltaY = getTop - prevY - 35;
        if (deltaY > 0) {
          return Math.min(prevY + 10, 230);
        } else if (deltaY < 0) {
          return Math.max(prevY - 10, 0);
        }
        return prevY;
      });
    }, 25);

    return () => clearInterval(interval);
  }, [getTop, verticalDirection, horizontalDirection]);

  const styleMod = {
    top: `${getTop}px`,
    left: `${getLeft}px`,
  };

  // Funzione per controllare il padlle
  const handleKeyDown = (event) => {
    if (event.key === "ArrowUp") {
      setPaddleLeftY((paddleLeftY) => Math.max(paddleLeftY - 10, 0));
    } else if (event.key === "ArrowDown") {
      setPaddleLeftY((paddleLeftY) => Math.min(paddleLeftY + 10, 230));
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // SCORE FUNCTION
  const [moltiplicatore, setMoltiplicatore] = useState(1);
  // definizione di moltiplicatore 
  let id1 = setInterval(() => {
    setMoltiplicatore(moltiplicatore + 1)
  }, (1000 * 60));

  setTimeout(() => {
    clearInterval(id1)
  }, (1000 * 60));
  // calcolo score
  let id2 = setInterval(() => {
    setScore(score + 1 * moltiplicatore);
  }, 1000);

  setTimeout(() => {
    clearInterval(id2)
  }, 1000);


  useEffect(() => {
    if (horizontalDirection > 0) {
      setHorizontalDirection(horizontalDirection + moltiplicatore);
    } else {
      setHorizontalDirection(horizontalDirection - moltiplicatore);
    }
    if (verticalDirection > 0) {
      setVerticalDirection(verticalDirection + moltiplicatore);
    } else {
      setVerticalDirection(verticalDirection - moltiplicatore);
    }


    console.log(verticalDirection);
    console.log(moltiplicatore);
  }, [moltiplicatore])



  return (
    <div tabIndex={0} onKeyDown={handleKeyDown}>
      <h2>Punteggio: {score}</h2>
      <PingPong>
        <Campo>
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