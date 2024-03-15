import { useState } from "react";
import {InputButton} from "./InputButton"

export function Tastiera(){
    const [cellIndex, setCellIndex] = useState(0);

    return(
        <div className="tastiera">
            <div className="first-row">
                <InputButton cellIndex={cellIndex} setCellIndex={setCellIndex} lettera="Q"/>
                <InputButton cellIndex={cellIndex} setCellIndex={setCellIndex} lettera="W"/>
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
                <InputButton lettera="INVIO"/>
                <InputButton lettera={<img width="50" height="50" src="https://img.icons8.com/ios/50/000000/backspace.png" alt="backspace"/>}/>

            </div>
        </div>
    )
}