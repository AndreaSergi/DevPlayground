/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { PingPong } from "./PingPong";
import { Campo } from "./Campo";
import { Paddle } from "./Paddle";
import { Ball } from "./Ball";
import "./pingPongGame.css";
import { Punteggio } from "./Punteggio";

function PingPongGame() {
  const [ballPosition, setBallPosition] = useState({ top: 50, left: 50 });
  const [ballDirection, setBallDirection] = useState({ vertical: 2, horizontal: 2 });
  const [score, setScore] = useState({ player: 0, opponent: 0 });
  const [paddleLeftY, setPaddleLeftY] = useState(115);
  const [paddleRightY, setPaddleRightY] = useState(115);

  const updatePaddlePosition = (key) => {
    switch (key) {
      case "ArrowUp":
        setPaddleLeftY((y) => Math.max(y - 10, 0));
        break;
      case "ArrowDown":
        setPaddleLeftY((y) => Math.min(y + 10, 430));
        break;
      case "o":
        setPaddleRightY((y) => Math.min(y + 10, 430));
        break;
      case "k":
        setPaddleRightY((y) => Math.max(y - 10, 0));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const handleKeyDown = ({ key }) => {
      if (key === 'ArrowUp') {
        setPaddleLeftY((y) => Math.max(y - 10, 0));
      } else if (key === 'ArrowDown') {
        setPaddleLeftY((y) => Math.min(y + 10, 450 - 70));
      } else if (key === 'o') {
        setPaddleRightY((y) => Math.min(y + 10, 450 - 70));
      } else if (key === 'k') {
        setPaddleRightY((y) => Math.max(y - 10, 0));
      }
    };
  
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
  
  

  useEffect(() => {
    console.log(ballPosition)
    const interval = setInterval(() => {
      setBallPosition((prevPosition) => {
        let { top, left } = prevPosition;
        let newDirection = { ...ballDirection };

        // Aggiorna la posizione della pallina
        top += newDirection.vertical;
        left += newDirection.horizontal;

        // Controlla collisioni con i bordi del campo
        if (top >= 430 || top <= 0) {
          newDirection.vertical = -newDirection.vertical;
        }
        if (left <= 0 || left >= 950) {
          newDirection.horizontal = -newDirection.horizontal;
          setScore((prevScore) => {
            return left <= 0
              ? { ...prevScore, opponent: prevScore.opponent + 1 }
              : { ...prevScore, player: prevScore.player + 1 };
          });
          left = 475; // Resetta la posizione della pallina
        }

        // Aggiorna la direzione della pallina se necessario
        setBallDirection(newDirection);
        return { top, left };
      });

      // Aggiorna la posizione del paddle destro
      setPaddleRightY((prevY) => {
        const deltaY = ballPosition.top - prevY - 35;
        return deltaY > 0 ? Math.min(prevY + 10, 450) : deltaY < 0 ? Math.max(prevY - 10, 0) : prevY;
      });
    }, 25);

    return () => clearInterval(interval);
  }, [ballPosition, ballDirection]);
  return (
    <div className="containerTable" tabIndex={0} onKeyDown={(e) => updatePaddlePosition(e.key)}>
      <Punteggio player={score.player} opponent={score.opponent} />
      <PingPong>
        <Campo>
          <Paddle position="left" style={{ top: `${paddleLeftY}px`, left: "0" }} />
          <Paddle position="right" style={{ top: `${paddleRightY}px`, right: "0" }} />
          <Ball style={{ top: `${ballPosition.top}px`, left: `${ballPosition.left}px` }} />
        </Campo>
      </PingPong>
    </div>
  );
}

export default PingPongGame;
