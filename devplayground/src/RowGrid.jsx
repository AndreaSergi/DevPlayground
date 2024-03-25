import React, { useEffect, useState } from 'react';

export function RowGrid({ lettereUguali, indiciUguali, rowIndex, posizione }) {
    const [colors, setColors] = useState(["white","white","white","white","white"])

// lettere uguali= [1,2,4]

useEffect(() => {
    const arrayMomentaneo = [...colors];

    if (lettereUguali && rowIndex === posizione + 1) {
        const occorrenze = {}; // Oggetto per tenere traccia delle occorrenze di ogni lettera

        // Conta le occorrenze di ogni lettera in lettereUguali
        lettereUguali.forEach(indice => {
            const lettera = arrayMomentaneo[indice]; // Ottieni la lettera associata all'indice
            occorrenze[lettera] = (occorrenze[lettera] || 0) + 1;
        });

        // Aggiorna gli indici delle lettere uguali
        for (let i = 0; i < lettereUguali.length; i++) {
            const indiceMomentaneo = lettereUguali[i];
            const lettera = arrayMomentaneo[indiceMomentaneo];
            if (occorrenze[lettera] > 1) { // Limita il colore giallo al numero massimo di occorrenze
                arrayMomentaneo[indiceMomentaneo] = "yellow";
                occorrenze[lettera]--; // Decrementa il contatore di occorrenze
            }
        }
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
                return (<div key= {index} className="cell" style={{ color: colors[index] }}></div>)
                })
            }
        </div>
    );
}

