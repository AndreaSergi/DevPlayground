const parolaCorretta = 'collaccr'.split('');
const tentativoCorrente = 'collara'.split('');
/* const letter = 'l' */
console.log(parolaCorretta);
const array = [];
const arrayGialle= []

function conteggioLettere(parolaCorretta, tentativoCorrente) {
    let counter = 0;
    for (let i = 0; i < parolaCorretta.length; i++) {
        // Check if the current letter of parolaCorretta exists in tentativoCorrente
        if (tentativoCorrente.includes(parolaCorretta[i])) {
            array.push(i);
            arrayGialle.push()
            counter++;
            console.log('Matched letter:', parolaCorretta[i]);
        }
    }
    console.log(tentativoCorrente, counter);
    console.log('array', array);
    return counter;
}

conteggioLettere(parolaCorretta, tentativoCorrente);
