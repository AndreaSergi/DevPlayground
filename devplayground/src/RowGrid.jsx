export function RowGrid({lettera, parolaCorretta}){

    return(
        <>
        <div className="wordCellsContainer">
            <div className="cell">{lettera}</div>
            <div className="cell">{lettera}</div>
            <div className="cell">{lettera}</div>
            <div className="cell">{lettera}</div>
            <div className="cell">{lettera}</div>
        </div>
        </>
    )
}