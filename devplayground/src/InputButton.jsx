export function InputButton({ lettera, cellIndex, setCellIndex, rowIndex, clickFunction, setStringa}) {


    const handleClick = () => {

        if(!clickFunction){
            const wordCells = document.querySelectorAll('.wordCellsContainer')[rowIndex].children;
    
            if (cellIndex < wordCells.length) {
                wordCells[cellIndex].innerText = lettera;
                if(wordCells[cellIndex].innerText){
                    setCellIndex(cellIndex + 1);
                    setStringa((letterePrecedente) => letterePrecedente + lettera)
                }
            }
        } else {
            clickFunction()
        }
    };

    return (
        <div>
            <button className="button" onClick={handleClick} value={lettera}>{lettera}</button>
        </div>
    );
}