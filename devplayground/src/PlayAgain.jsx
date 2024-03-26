export function PlayAgain(src) {
    function refreshPage(){ 
        window.location.reload(); 
    }

    return (
        <button className="play-again" type="button" onClick={ refreshPage }> GIOCA ANCORA </button>
    )
}