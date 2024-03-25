import { ParoleGrid } from "./ParoleGrid";
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



    // Function to handle "invio" in Tastiera
    const handleInvio = (newLettereUguali, newIndiciUguali) => {
        
        setLettereUguali(newLettereUguali)
        setIndiciUguali(newIndiciUguali)
        
        console.log("asdfsdxg",indiciUguali)
    
    };

    useEffect(()=>{
        if(indiciUguali.length == 5 || rowIndex  > 6){
            setGameOver(true)
        }

    },[rowIndex, indiciUguali])


    return (
        <div className="main-container">
            <h1>Indovina la parola di oggi</h1>
            <ParoleGrid indiciUguali = {indiciUguali} lettereUguali={lettereUguali} rowIndex = {rowIndex} occorenze = {oggettoOccorrenze}/>
            {!gameOver &&
                <Tastiera onInvio={handleInvio} rowIndex = {rowIndex} setRowIndex = {setRowIndex} />
            }
        </div>
    )
}