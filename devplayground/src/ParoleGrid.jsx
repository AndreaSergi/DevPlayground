import { RowGrid } from "./RowGrid";

export function ParoleGrid({lettera}){


    return(
        <div className="main-grid">
            <RowGrid lettera={lettera}/>
            <RowGrid lettera={lettera}/>
            <RowGrid lettera={lettera}/>
            <RowGrid lettera={lettera}/>
            <RowGrid lettera={lettera}/>
            <RowGrid lettera={lettera}/>
        </div>

    )
}