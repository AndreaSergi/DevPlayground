/* eslint-disable react/prop-types */
export function SingleScore({ player, namePlayer }) {
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
        justifyContent: "center",
        height: "100px"
      };
    
    
      const score = {
        display: "flex",
        flexDirection: "horizontal",
        height: "100%"
      }

      const styleImg = {
        height: "50px",
        borderRadius: "100%"
      }
    
      return (
        <div style={scoreStyle}>
          <div style={score}>
            <img style={styleImg} src="/pingpong/img/avatar1.png" alt="avatar pc" />
            <div style={{marginLeft: "30px"}}>
              <h2>{namePlayer}</h2>
              <h3>{player}</h3>
            </div>
          </div>
        </div>
      );
  
    
}