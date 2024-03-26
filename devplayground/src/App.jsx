import { ParoleGrid } from "./ParoleGrid";
import { PlayAgain } from "./PlayAgain";
import { ProvaUguaglianza } from "./ProvaUguaglianza";
import { RowGrid } from "./RowGrid";
import { Tastiera } from "./Tastiera";
import { useEffect, useState} from "react";

export function App() {
    

    const [lettereUguali, setLettereUguali] = useState([]);
    const [indiciUguali, setIndiciUguali] = useState([]);
    const [rowIndex, setRowIndex] = useState(0)
    const [gameOver, setGameOver] = useState(false)
    const [oggettoOccorrenze, setOggettoOccorrenze] = useState({});

    const titolo = "<h1> HELLO WORDL! </h1>"

    // Function to handle "invio" in Tastiera
    const handleInvio = (newLettereUguali, newIndiciUguali) => {
        
        setLettereUguali(newLettereUguali)
        setIndiciUguali(newIndiciUguali)
        
        console.log("asdfsdxg",indiciUguali)
    
    };

    useEffect(()=>{
        if(indiciUguali.length == 5 || rowIndex  > 4){
            setGameOver(true)
        }

    },[rowIndex, indiciUguali])


    return (
        <div className="main-container vibur-regular">
            <h1>{titolo}</h1>
            <ParoleGrid indiciUguali = {indiciUguali} lettereUguali={lettereUguali} rowIndex = {rowIndex} occorenze = {oggettoOccorrenze}/>
            {!gameOver ?
                <Tastiera onInvio={handleInvio} rowIndex = {rowIndex} setRowIndex = {setRowIndex} /> : <PlayAgain />
            }
        </div>
    )
}