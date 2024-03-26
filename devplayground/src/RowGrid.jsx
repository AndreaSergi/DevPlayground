import React, { useEffect, useState } from 'react';

export function RowGrid({ lettereUguali, indiciUguali, rowIndex, posizione }) {
    const [colors, setColors] = useState(["black","black","black","black","black"])

// lettere uguali= [1,2,4]

useEffect(() => {
    const arrayMomentaneo = [...colors];

    if (lettereUguali && rowIndex === posizione + 1) {
        lettereUguali.forEach(indice => {
            arrayMomentaneo[indice] = "#d3bb04";
        });
    }

    if (indiciUguali && rowIndex === posizione + 1) {
        indiciUguali.forEach(indice => {
            arrayMomentaneo[indice] = "green";
        });
    }

    setColors(arrayMomentaneo);

}, [lettereUguali]);


  
    

    return (
        <div className="wordCellsContainer">

            {[...Array(5)].map((value, index)=>{
                return (<div key= {index} className="cell" style={{ backgroundColor: colors[index] }}></div>)
                })
            }
        </div>
    );
}

