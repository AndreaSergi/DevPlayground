import React, { useState } from "react";

export function InputButton({ lettera, cellIndex, setCellIndex}) {

    const [wordIndex, setWordIndex] = useState(0);

    const handleClick = () => {
        const wordCells = document.querySelectorAll('.wordCellsContainer')[wordIndex].children;

        if (cellIndex < wordCells.length) {
            wordCells[cellIndex].innerText = lettera;
            if(wordCells[cellIndex].innerText){
                setCellIndex(cellIndex + 1);
            }
        } else {
            console.log('All divs are already populated.');
            setWordIndex(wordIndex + 1)
        }
    };

    return (
        <div>
            <button className="button" onClick={handleClick} value={lettera}>{lettera}</button>
        </div>
    );
}