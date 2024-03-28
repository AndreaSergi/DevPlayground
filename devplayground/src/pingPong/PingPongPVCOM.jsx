/* eslint-disable no-unused-vars */
import React, { useState, useEffect, createContext, StrictMode } from "react";
import { Link } from "react-router-dom";
import { PingPong } from "./PingPong";
import { Campo } from "./Campo";
import { Paddle } from "./Paddle";
import { Ball } from "./Ball";
import { SingleScore } from "./SingleScore";
import "./pingpong.css";

function PingPongPVCOM() {
  const larghezzaCampo = 1175;
  const altezzaCampo = 575;
  const name = "Giocatore";
  const [getTop, setTop] = useState(50);
  const [getLeft, setLeft] = useState(50);
  const [verticalDirection, setVerticalDirection] = useState(2); // Velocità verticale aumentata
  const [horizontalDirection, setHorizontalDirection] = useState(1); // Velocità orizzontale aumentata
  const [score, setScore] = useState(0);
  let [paddleLeftY, setPaddleLeftY] = useState(115); // Posizione iniziale paddle sinistro
  let [paddleRightY, setPaddleRightY] = useState(115); // Posizione iniziale paddle destro

  let [getCheck, setCheck] = useState(true); //state utilizzato per verificare la fine della partita

  let [key, setKey] = useState(0); // state utilizzato per le key relative al salvataggio dati al sassion storage

  // Funzione per controllare se la pallina ha colpito un paddle
  const checkPaddleHit = (
    ballPos,
    paddlePos,
    paddleHeight,
    paddleWidth,
    ballSize,
    isRightPaddle = false // Aggiungi un nuovo parametro per identificare se è il paddle destro
  ) => {
    const ballLeft = ballPos.x;
    const ballRight = ballPos.x + ballSize;
    const ballTop = ballPos.y;
    const ballBottom = ballPos.y + ballSize;
  
    let paddleLeft = paddlePos.x;
    let paddleRight = paddlePos.x + paddleWidth;
    const paddleTop = paddlePos.y;
    const paddleBottom = paddlePos.y + paddleHeight;
  
    // Se è il paddle destro, aggiusta la posizione per il controllo della collisione
    if (isRightPaddle) {
      paddleLeft -= paddleWidth; // Sposta il paddleLeft indietro della larghezza del paddle
      paddleRight -= paddleWidth; // Sposta il paddleRight indietro della larghezza del paddle
    }
  
    const hit = ballRight >= paddleLeft &&
                ballLeft <= paddleRight &&
                ballBottom >= paddleTop &&
                ballTop <= paddleBottom;
  
    if (hit) {
      console.log(`La pallina ha colpito il ${isRightPaddle ? 'paddle destro' : 'paddle sinistro'}!`);
    }
  
    return hit;
  };
  
  

  useEffect(() => {
    const interval = setInterval(() => {
      setTop((prevTop) => {
        let newTop = prevTop + verticalDirection;
        if (newTop >= altezzaCampo - 10 || newTop <= 0) {
          newTop = prevTop;
          setVerticalDirection(-verticalDirection);
        }
        return newTop;
      });

      setLeft((prevLeft) => {
        let newLeft = prevLeft + horizontalDirection;
        if (newLeft >= larghezzaCampo - 20 || newLeft <= 0) {
          newLeft = prevLeft;
          setHorizontalDirection(-horizontalDirection);
        }

        //FINE PARTITA
        if (newLeft <= 9) {
          //console.log("fermare la pallina");
          //console.log(score);
          setCheck(false);
          setVerticalDirection(0);
          setHorizontalDirection(0);

          sessionStorage.setItem(key, {
            name: name,
            score: score,
            data: new Date(),
          });
          setKey(key + 1);
        }
        const ballPos = { x: newLeft, y: getTop };
        const paddleLeftPos = { x: 0, y: paddleLeftY };
        const paddleRightPos = { x: larghezzaCampo, y: paddleRightY };
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
            ballSize,
            true
          )
        ) {
          newLeft = prevLeft;
          setHorizontalDirection(-horizontalDirection);
        } else if (newLeft <= 0 || newLeft >= larghezzaCampo) {
          newLeft = 50;
        }
        return newLeft;
      });

      setPaddleRightY((prevY) => {
        const deltaY = getTop - prevY - 35;
        if (deltaY > 0) {
          return Math.min(prevY + 10, altezzaCampo - 70);
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
      setPaddleLeftY((paddleLeftY) =>
        Math.min(paddleLeftY + 10, altezzaCampo - 70)
      );
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
    setMoltiplicatore(moltiplicatore + 1);
    console.log("interval 2");
  }, 1000 * 60);

  setTimeout(() => {
    clearInterval(id1);
  }, 1000 * 60);
  // calcolo score

  let id2 = setInterval(() => {
    if (getCheck) {
      setScore(score + 1 * moltiplicatore);
    }
  }, 1000);

  setTimeout(() => {
    clearInterval(id2);
  }, 1000);

  useEffect(() => {
    if (moltiplicatore <= 3) {
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
    } else {
      console.log("velocità massima raggiunta");
    }

    console.log(`velocità ${verticalDirection}`);
    console.log(`minuti trascorsi ${moltiplicatore}`);
  }, [moltiplicatore]);
  return (
    <div tabIndex={0} onKeyDown={handleKeyDown}>
      <SingleScore namePlayer={name} player={`${score}`} />
      <PingPong>
        <Campo
          style={{ width: `${larghezzaCampo}px`, height: `${altezzaCampo}px` }}
        >
          {!getCheck && (
            <div className="pop-up">
              <h2>Game Over!</h2>
              <h3>Il tuo punteggio: {score}</h3>
              <Link to="/">
                <button className="btn-pop-up">Menù Principale</button>
              </Link>
              <button
                className="btn-pop-up"
                onClick={() => {
                  window.location.reload();
                }}
              >
                Nuova partita
              </button>
            </div>
          )}
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

export default PingPongPVCOM;
