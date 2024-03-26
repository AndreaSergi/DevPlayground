/* eslint-disable react/prop-types */
export function Punteggio({ player, opponent, namePlayer1, namePlayer2 }) {
  const scoreStyle = {
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    background: 'url("pingpong/img/backgroundPunteggio.png")',
    color: "#ffd702",
    textAlign: "center",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    fontFamily: '"Lucida Console", Monaco, monospace',
    border: "5px solid #dbb906",
    display: "flex",
    flexDirection: "horizontal",
    align: "center",
    justifyContent: "center"
  };

  const sx = {
    marginRight: "10%",
    display: "flex",
    flexDirection: "horizontal",
  }
  const dx = {
    marginLeft: "10%",
    display: "flex",
    flexDirection: "horizontal",
  }

  return (
    <>
      <div style={scoreStyle}>
      <div style={sx}>
        <div style={{marginRight: "30px"}}>
          <h2>{namePlayer1}</h2>
          <h3>{player}</h3>
        </div>
        <img src="vite.svg" alt="avatar giocatore" />
      </div>
      <div style={dx}>
        <img src="vite.svg" alt="avatar pc" />
        <div style={{marginLeft: "30px"}}>
          <h2>{namePlayer2}</h2>
          <h3>{opponent}</h3>
        </div>
      </div>
    </div>
    </>
    
  );
}
