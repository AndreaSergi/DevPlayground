/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { PingPong } from "./PingPong";
import { Campo } from "./Campo";
import { Paddle } from "./Paddle";
import { Ball } from "./Ball";
import { Punteggio } from "./Punteggio";
import './pingpong.css'
import "./pop-up.css"

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

  let [goal, setGoal] = useState(""); // state utilizzato per assegnare il giocatore che ha appena ottenuto il punto

  let [getCheck, setCheck] = useState(true); //state utilizzato per frezzare la partita

  let [checkEndGame, setCheckEndGame] = useState(false); //state utilizzato per verificare la fine della partita

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
            setCheck(false);
          } else {
            setScore((score) => ({ ...score, player: score.player + 1 }));
            setCheck(false);
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


  // FREEZE GAME
  useEffect(() => {
    if (!getCheck) {
      setVerticalDirection(0);
      setHorizontalDirection(0);
    } else {
      setVerticalDirection(4);
      setHorizontalDirection(3);
    }
  }, [getCheck])
  // Assegnazione nome del giocatore che ha appena ottunuto il punto
  useEffect(() => {
    setGoal(nameGiocatore2);
  }, [score.opponent])

  useEffect(() => {
    setGoal(nameGiocatore1);
  }, [score.player])

  useEffect(() => {
    if (score.opponent || score.player == 10) {
      setCheckEndGame(true)
    }
  }, [score.opponent, score.player])

  return (
    <div>
      <Punteggio player={score.player} opponent={score.opponent} namePlayer1={nameGiocatore1} namePlayer2={nameGiocatore2} />
      <PingPong>
        <Campo style={{ width: `${larghezzaCampo}px`, height: `${altezzaCampo}px` }}>
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
      {/* pop-up assegnazione punteggio */}
      {!getCheck && !checkEndGame &&

        <div className="pop-up">
          <h2>Punto assegnato a: {goal} !</h2>
          <h3>Punteggio attuale: {score.player} - {score.opponent}</h3>
          <button onClick={() => { setCheck(true) }} className="btn-pop-up">Continua</button>
        </div>
      }


      {/* pop-up fine partita */}
      {checkEndGame &&
        <div className="pop-up">
          <h2>Game Over!</h2>
          <h3>Vince : {goal}</h3>
          <button onClick={() => { setCheck(true); setScore({ player: 0, opponent: 0 }); setCheckEndGame(false);}} className="btn-goal">Rivincita</button>
          <button className="btn-pop-up">Menù Principale</button>
        </div>}
    </div>
  );
}
