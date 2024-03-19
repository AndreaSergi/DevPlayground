import { useState } from "react";
import {InputButton} from "./InputButton"


export function Tastiera(){
    const [cellIndex, setCellIndex] = useState(0);
    const [rowIndex, setRowIndex] = useState(0)
    const [stringa, setStringa ] = useState("")

    let arrayParole1 = []

    function handleInvio(){
        if(rowIndex <= 5){
            setRowIndex(rowIndex + 1)
            setCellIndex(0)
            arrayParole1.push(stringa)
            console.log(stringa)
        }
    }

    function handleDelete(){
        setStringa(stringa.substring(0 , cellIndex))
        setCellIndex(cellIndex - 1)
    }



    return(
        <div className="tastiera">
            <div className="first-row">
                <InputButton rowIndex={rowIndex} cellIndex={cellIndex} setStringa={setStringa} setCellIndex={setCellIndex} lettera="Q"/>
                <InputButton rowIndex={rowIndex} cellIndex={cellIndex} setStringa={setStringa} setCellIndex={setCellIndex} lettera="W"/>
                <InputButton cellIndex={cellIndex} setCellIndex={setCellIndex} lettera="E"/>
                <InputButton cellIndex={cellIndex} setCellIndex={setCellIndex} lettera="R"/>
                <InputButton cellIndex={cellIndex} setCellIndex={setCellIndex} lettera="T"/>
                <InputButton cellIndex={cellIndex} setCellIndex={setCellIndex} lettera="Y"/>
                <InputButton cellIndex={cellIndex} setCellIndex={setCellIndex} lettera="U"/>
                <InputButton cellIndex={cellIndex} setCellIndex={setCellIndex} lettera="I"/>
                <InputButton cellIndex={cellIndex} setCellIndex={setCellIndex} lettera="O"/>
                <InputButton cellIndex={cellIndex} setCellIndex={setCellIndex} lettera="P"/>

            </div>

            <div className="second-row">

                <InputButton cellIndex={cellIndex} setCellIndex={setCellIndex} lettera="A"/>
                <InputButton cellIndex={cellIndex} setCellIndex={setCellIndex} lettera="S"/>
                <InputButton cellIndex={cellIndex} setCellIndex={setCellIndex} lettera="D"/>
                <InputButton cellIndex={cellIndex} setCellIndex={setCellIndex} lettera="F"/>
                <InputButton cellIndex={cellIndex} setCellIndex={setCellIndex} lettera="G"/>
                <InputButton cellIndex={cellIndex} setCellIndex={setCellIndex} lettera="H"/>
                <InputButton cellIndex={cellIndex} setCellIndex={setCellIndex} lettera="J"/>
                <InputButton cellIndex={cellIndex} setCellIndex={setCellIndex} lettera="K"/>
                <InputButton cellIndex={cellIndex} setCellIndex={setCellIndex} lettera="L"/>
            </div>

            <div className="third-row">
                <InputButton cellIndex={cellIndex} setCellIndex={setCellIndex} lettera="Z"/>
                <InputButton cellIndex={cellIndex} setCellIndex={setCellIndex} lettera="X"/>
                <InputButton cellIndex={cellIndex} setCellIndex={setCellIndex} lettera="C"/>
                <InputButton cellIndex={cellIndex} setCellIndex={setCellIndex} lettera="V"/>
                <InputButton cellIndex={cellIndex} setCellIndex={setCellIndex} lettera="B"/>
                <InputButton cellIndex={cellIndex} setCellIndex={setCellIndex} lettera="N"/>
                <InputButton cellIndex={cellIndex} setCellIndex={setCellIndex} lettera="M"/>
                <InputButton lettera="INVIO" clickFunction={handleInvio}/>
                <InputButton clickFunction={handleDelete} lettera={<img width="50" height="50" src="https://img.icons8.com/ios/50/000000/backspace.png" alt="backspace"/>}/>

            </div>
        </div>
    )
}