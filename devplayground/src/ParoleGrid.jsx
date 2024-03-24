import { RowGrid } from "./RowGrid";

export function ParoleGrid({ lettereUguali, rowIndex, indiciUguali }){


    return(
        <div className="main-grid">
            
            <RowGrid posizione = {0} indiciUguali = {indiciUguali} lettereUguali={lettereUguali} rowIndex = {rowIndex}/>
            <RowGrid posizione = {1} indiciUguali = {indiciUguali} lettereUguali={lettereUguali} rowIndex = {rowIndex}/>
            <RowGrid posizione = {2} indiciUguali = {indiciUguali} lettereUguali={lettereUguali} rowIndex = {rowIndex}/>
            <RowGrid posizione = {3} indiciUguali = {indiciUguali} lettereUguali={lettereUguali} rowIndex = {rowIndex}/>
            <RowGrid posizione = {4} indiciUguali = {indiciUguali} lettereUguali={lettereUguali} rowIndex = {rowIndex}/>
        </div>

    )
}