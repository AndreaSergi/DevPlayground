import { Parola } from "./Parola";
import { ParoleGrid } from "./ParoleGrid";
import { Tastiera } from "./Tastiera";

export function App() {


    return (
        <div className="main-container">
            <h1>Indovina la parola di oggi</h1>
            <Parola/>
            <ParoleGrid/>
            <Tastiera/>

        </div>
    )
}