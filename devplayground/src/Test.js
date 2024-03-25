const parolaCorretta = 'collaccrl'.split('');
const tentativoCorrente = 'collaraa'.split('');


function provaTest(parola1, parola2){
    let oggettoOccorrenze = {}
     parola2.forEach(element => {
        if(oggettoOccorrenze[element] == undefined){
            oggettoOccorrenze[element] = 0
            parola1.forEach(element2 => {
                if(element2 === element){
                    oggettoOccorrenze[element] ++
                }
            })
        }
    });

    return oggettoOccorrenze
}

const oggettoOccorrenze = provaTest(parolaCorretta, tentativoCorrente)

tentativoCorrente.forEach(element => {
    if(oggettoOccorrenze[element] > 0){
        oggettoOccorrenze[element] --
        console.log("coloro di giallo", element)

    }
});
console.log("dopoforeach", oggettoOccorrenze)