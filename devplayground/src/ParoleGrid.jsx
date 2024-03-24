import { RowGrid } from "./RowGrid";

export function ParoleGrid({lettera, lettereUguali}){


    return(
        <div className="main-grid">
            <RowGrid lettereUguali={lettereUguali} lettera={lettera}/>
            <RowGrid lettereUguali={lettereUguali} lettera={lettera}/>
            <RowGrid lettereUguali={lettereUguali} lettera={lettera}/>
            <RowGrid lettereUguali={lettereUguali} lettera={lettera}/>
            <RowGrid lettereUguali={lettereUguali} lettera={lettera}/>
        </div>

    )
}