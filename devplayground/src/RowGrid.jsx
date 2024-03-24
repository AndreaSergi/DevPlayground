import React, { useEffect, useState } from 'react';

export function RowGrid({ lettereUguali, indiciUguali, rowIndex, posizione }) {
    const [colors, setColors] = useState(["white","white","white","white","white"])

// lettere uguali= [1,2,4]

    useEffect(()=>{
        const arrayMomentaneo = colors
        if(lettereUguali && rowIndex == posizione + 1){
            for(let i = 0; i < lettereUguali.length ; i++){
                const indiceMomentaneo = lettereUguali[i]
                arrayMomentaneo[indiceMomentaneo] = "yellow"
            }
        }

        if(indiciUguali && rowIndex == posizione + 1){
            for(let i = 0; i < indiciUguali.length ; i++){
                const indiceMomentaneo = indiciUguali[i]
                arrayMomentaneo[indiceMomentaneo] = "green"
            }
        }
        setColors([...arrayMomentaneo])

    },[lettereUguali])
    

    return (
        <div className="wordCellsContainer">

            {[...Array(5)].map((value, index)=>{
                return (<div key= {index} className="cell" style={{ color: colors[index] }}></div>)
                })
            }
        </div>
    );
}
