
import React, { useEffect, useState } from 'react';

export function RowGrid({ lettera, lettereUguali }) {
    const [color, setColor] = useState('red');

    useEffect(() => {
        if (lettereUguali && lettereUguali.includes(lettera.toLowerCase())) {
            setColor('yellow');
        } else {
            console.log("sono nell'if di lettere uguali")
            setColor('black');
        }
    }, [lettereUguali, lettera]);

    return (
        <div className="wordCellsContainer">
            <div className="cell" style={{ color: color }}>{lettera}</div>
            <div className="cell" style={{ color: color }}>{lettera}</div>
            <div className="cell" style={{ color: color }}>{lettera}</div>
            <div className="cell" style={{ color: color }}>{lettera}</div>
            <div className="cell" style={{ color: color }}>{lettera}</div>
        </div>
    );
}
