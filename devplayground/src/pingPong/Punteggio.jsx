/* eslint-disable react/prop-types */
export function Punteggio({ player, opponent }) {
  const scoreStyle = {
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    background: 'linear-gradient(to right, #1e3c72, #2a5298)',
    color: '#ffd702',
    textAlign: 'center',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    fontFamily: '"Lucida Console", Monaco, monospace',
    border: '5px solid #dbb906' // Aggiunto bordo color oro
  };

  return (
    <div style={scoreStyle}>
      <h2>
        Punteggio - Giocatore: {player} - PC: {opponent}
      </h2>
    </div>
  );
}

