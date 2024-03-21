import { useState, useEffect } from "react";
import {InputButton} from "./InputButton"


export function Tastiera(){
    const [cellIndex, setCellIndex] = useState(0);
    const [rowIndex, setRowIndex] = useState(0)
    const [stringa, setStringa ] = useState("")
    const [arrayParole1, setArrayParole1] = useState([])
    
    const rows = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['Z', 'X', 'C', 'V', 'B', 'N', 'M', 'INVIO', 'DELETE']
    ];



    function handleInvio(){
        if(rowIndex <= 5){
            setRowIndex(rowIndex + 1);
            setCellIndex(0);
            setArrayParole1(prevArray => [...prevArray, stringa]);
            setStringa("");
        }
    }


    
    useEffect(() => {
        console.log("Array of words:", arrayParole1);
    }, [arrayParole1]);



    function handleDelete() {
        const wordCells = document.querySelectorAll('.wordCellsContainer')[rowIndex].children;
    
        if (cellIndex > 0) {
            wordCells[cellIndex - 1].innerText = "";
            
            setCellIndex(cellIndex - 1);

            setStringa(prevStringa => prevStringa.slice(0, -1));
    
        }
    }



    return (
        <div className="tastiera">
            {rows.map((row, index) => (
                <div className="row" key={index}>
                    {row.map((key, keyIndex) => (
                        <InputButton
                            key={keyIndex}
                            rowIndex={rowIndex}
                            cellIndex={cellIndex}
                            setStringa={setStringa}
                            setCellIndex={setCellIndex}
                            lettera={key}
                            clickFunction={key === 'INVIO' ? handleInvio : (key === 'DELETE' ? handleDelete : undefined)}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}