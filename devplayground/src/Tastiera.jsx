import {InputButton} from "./InputButton"

export function Tastiera(){



    return(
        <div className="tastiera">
            <div className="first-row">
                <InputButton lettera="Q"/>
                <InputButton lettera="W"/>
                <InputButton lettera="E"/>
                <InputButton lettera="R"/>
                <InputButton lettera="T"/>
                <InputButton lettera="Y"/>
                <InputButton lettera="U"/>
                <InputButton lettera="I"/>
                <InputButton lettera="O"/>
                <InputButton lettera="P"/>

            </div>

            <div className="second-row">

                <InputButton lettera="A"/>
                <InputButton lettera="S"/>
                <InputButton lettera="D"/>
                <InputButton lettera="F"/>
                <InputButton lettera="G"/>
                <InputButton lettera="H"/>
                <InputButton lettera="J"/>
                <InputButton lettera="K"/>
                <InputButton lettera="L"/>
            </div>

            <div className="third-row">
                <InputButton lettera="Z"/>
                <InputButton lettera="X"/>
                <InputButton lettera="C"/>
                <InputButton lettera="V"/>
                <InputButton lettera="B"/>
                <InputButton lettera="N"/>
                <InputButton lettera="M"/>
                <InputButton lettera="INVIO"/>
                <InputButton lettera={<img width="50" height="50" src="https://img.icons8.com/ios/50/000000/backspace.png" alt="backspace"/>}/>

            </div>
        </div>
    )
}