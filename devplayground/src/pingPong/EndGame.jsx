import "./EndGame.css"
export function EndGame({score}) {
    return(
        <>
            <div className="container-end-game">
                <h2>Game Over!</h2>
                <h3>Il tuo punteggio: {score}</h3>
                <button className="btn-end-game">Menù principale</button>
                <button className="btn-end-game">Nuova partita</button>
            </div>
        </>
    )    
}