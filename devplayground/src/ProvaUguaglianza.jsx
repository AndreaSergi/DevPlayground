export function ProvaUguaglianza() {

    const lettereUguali = []
    const indiciUguali = []

    let parolaCorretta = 'stela'
    let tentativo = 'atena'

/*  et parola1 = parolaCorretta.split('').sort().join('')
    let parola2 = tentativo.split('').sort().join('') */

    for(let i = 0; i < parolaCorretta.length; i++){
        for(let j = 0; j < tentativo.length; j++) {
            if(parolaCorretta[i] === tentativo[j]){
                lettereUguali.push(tentativo[j]) // DIVENTARE GIALLE
            }
        }
    }

    console.log(lettereUguali)

    for(let i = 0; i < parolaCorretta.length; i++){
        if(parolaCorretta[i] === tentativo[i]){
            indiciUguali.push[tentativo[i]] // DIVENTARE VERDI
        }
    }

    console.log(indiciUguali)
    

    console.log(parolaCorretta)
    console.log(tentativo)

    return
}

/* const lettereUguali = []

    let fiore = 'fiore'
    let andre = 'andre'

    let parola1 = fiore.split('').sort().join('')
    let parola2 = andre.split('').sort().join('')

    for(let i = 0; i < parola1.length; i++){
        if(parola1[i] === parola2[i]){
            lettereUguali.push(parola1[i], parola2[i])
        }
    }
    console.log(lettereUguali)

    console.log(parola1)
    console.log(parola2) */









    /* Backup Tastiera */

    import { useState, useEffect } from "react";
import {InputButton} from "./InputButton"


export function Tastiera(){
    const [cellIndex, setCellIndex] = useState(0);
    const [rowIndex, setRowIndex] = useState(0)
    const [tentativo, setTentativo ] = useState("")
    const [arrayParole1, setArrayParole1] = useState([])
    const [parolaCorretta, setParolaCorretta] = useState('')
    const [lettereUguali, setLettereUguali] = useState([])
    const [indiciUguali, setIndiciUguali] = useState([])
    
    const rows = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['Z', 'X', 'C', 'V', 'B', 'N', 'M', 'INVIO', 'DELETE']
    ];

    const paroleItaliane5 = [
        "fiera",
        "rosso",
        "piano",
        "sedia",
        "grano",
        "fiume",
        "lampo",
        "sogno",
        "miele",
        "manto",
        "terra",
        "verde",
        "pazza",
        "corpo",
        "fogna",
        "donna",
        "stelo",
        "piede",
        "pollo",
        "fiore",
        "peste",
        "scala",
        "canna",
        "culla",
        "notte",
        "scala",
        "dolce",
        "pieno",
        "vista",
        "forza",
        "guida",
        "vetro",
        "cielo",
        "notte",
        "culla",
        "lampo",
        "canto",
        "occhi",
        "sonno",
        "padre",
        "ombra",
        "cacao",
        "secco",
        "burro",
        "denti",
        "luogo",
        "terra",
        "legno",
        "meteo",
        "monte",
        "palla",
        "scena",
        "fiera",
        "mente",
        "porto",
        "dente",
        "canto",
        "lucro",
        "scala",
        "copia",
        "pista",
        "scalo",
        "scena",
        "volta",
        "figli",
        "sinus",
        "sedia",
        "giuro",
        "guano",
        "giuro",
        "spina",
        "tempi",
        "tasso",
        "trama",
        "sogno",
        "messa",
        "ragno",
        "grado",
        "donna",
        "stamp",
        "panno",
        "norma",
        "lampo",
        "golfo",
        "guano",
        "gusto",
        "stria",
        "fiume",
        "pazza",
        "spada",
        "grana",
        "brama",
        "mossa",
        "villa",
        "pazza",
        "fetta",
        "nervo",
        "acqua",
        "pesca",
        "becco",
        "vista",
        "pieno",
        "folla",
        "botta",
        "risma",
        "magra",
        "terme",
        "piaga",
        "parco",
        "patto",
        "squad",
        "vista",
        "pazzo",
        "tavol",
        "pelle",
        "sogno",
        "scopo",
        "buono",
        "folla",
        "gamma",
        "venne",
        "lotta",
        "frodo",
        "mimmo",
        "prono",
        "retto",
        "vasta",
        "anima",
        "metto",
        "stiva",
        "verbo",
        "scema",
        "virgo",
        "gotta",
        "fugge",
        "scalo",
        "chiar",
        "prese",
        "corpo",
        "guano",
        "tovag",
        "curvo",
        "merlo",
        "stola",
        "lotto",
        "firma",
        "mista",
        "stiva",
        "comun",
        "sesto",
        "rondo",
        "trama",
        "bagno",
        "tagli",
        "fiato",
        "scudo",
        "vista",
        "ricco",
        "sello",
        "porto",
        "bosco",
        "zolla",
        "scena",
        "campo",
        "ruota",
        "senso",
        "botte",
        "tomba",
        "sorgo",
        "bosco",
        "fucil",
        "donna",
        "buona",
        "culla",
        "bocca",
        "folla",
        "curva",
        "pista",
        "tavol",
        "barca",
        "lotta",
        "spada",
        "costa",
        "risma",
        "zocco",
        "polio",
        "pieno",
        "bieta",
        "selva",
        "bioma",
        "cerbo",
        "suola",
        "stola",
        "spola",
        "frode",
        "lavor",
        "vento",
        "sugli",
        "lavor",
        "suole",
        "buono",
        "picco",
        "scato",
        "stesa",
        "metto",
        "corso",
        "farlo",
        "pette",
        "metto",
        "corso",
        "scema",
        "scato",
        "rospo",
        "musco",
        "salmo",
        "prono",
        "verbo",
        "bieta",
        "teore",
        "verme",
        "sopra",
        "risma",
        "stoca",
        "soffi",
        "musco",
        "verba",
        "folla",
        "spola",
        "maius",
        "veste",
        "sugli",
        "corso",
        "vetri",
        "vento",
        "vetro",
        "spesa",
        "grifo",
        "corsi",
        "corsa",
        "costa",
        "copia",
        "viggo",
        "pesto",
        "polio",
        "vesto",
        "piano",
        "bocca",
        "tomba",
        "lavor",
        "cuore",
        "lento",
        "copio",
        "corto",
        "visto",
        "scopa",
        "risma",
        "pieno",
        "scopa",
        "sopra",
        "stola",
        "vesta",
        "cesto",
        "petto",
        "peste",
        "stoic",
        "pieta",
        "posto",
        "carbo",
        "stima",
        "scopa",
        "bruma",
        "matto",
        "basso",
        "lotta",
        "scopa",
        "pesto",
        "corsi",
        "musco",
        "soffi",
        "rospo",
        "stoca",
        "calmo",
        "vista",
        "muovo",
        "sfera",
        "ruoto",
        "rospo",
      ];
      
      const paroleItaliane6 = [
        "giallo",
        "lunaio",
        "fiesta",
        "lavare",
        "patata",
        "andare",
        "calcio",
        "casset",
        "pagare",
        "gustar",
        "viaggi",
        "spazio",
        "cucina",
        "farina",
        "pensar",
        "salute",
        "dolore",
        "brutto",
        "lingua",
        "famili",
        "matita",
        "vitale",
        "ritorn",
        "abbond",
        "merito",
        "lavoro",
        "cancro",
        "saluto",
        "nebbia",
        "catena",
        "sorrid",
        "profum",
        "montag",
        "danneg",
        "terrib",
        "merito",
        "fidanz",
        "strada",
        "felice",
        "regalo",
        "giorno",
        "tempor",
        "sistem",
        "dottor",
        "pesant",
        "lucido",
        "aperto",
        "deside",
        "cavolo",
        "vestit",
        "pubbli",
        "fortun",
        "raggio",
        "veloce",
        "guardo",
        "girare",
        "vivere",
        "cavare",
        "polver",
        "fiorir",
        "vuotar",
        "sorris",
        "cucire",
        "tintor",
        "cercar",
        "attenz",
        "creare",
        "grembo",
        "storia",
        "sciogl",
        "fidanz",
        "amante",
        "pistol",
        "cassar",
        "bottig",
        "batter",
        "indaga",
        "albero",
        "nascon",
        "guidar",
        "pittur",
        "acquam",
        "lunghi",
        "ballar",
        "romanz",
        "ammira",
        "sugger",
        "brutto",
        "cresta",
        "contat",
        "fiocco",
        "scoppi",
        "malati",
        "scelte",
        "macchi",
        "esamin",
        "truppe",
        "vivace",
        "calcio",
        "modell",
        "cambia",
        "mentre",
        "dispos",
        "passag",
        "mandar",
        "diping",
        "mattin",
        "giocar",
        "terrib",
        "corsia",
        "candit",
        "vittor",
        "attacc",
        "solita",
        "valore",
        "cerchi",
        "dipend",
        "vuotar",
        "cancro",
        "spazio",
        "rubare",
        "fintur",
        "fumare",
        "pianur",
        "cammin",
        "ballat",
        "cucino",
        "urlare",
        "domani",
        "rischi",
        "soffer",
        "sapore",
        "divers",
        "riflet",
        "imparo",
        "voglio",
        "lascia",
        "vedere",
        "niente",
        "dentro",
        "batter",
        "ricchi",
        "mestie",
        "tavolo",
        "guidat",
        "ingann",
        "recita",
        "scolta",
        "grazia",
        "fatica",
        "spazio",
        "faccio",
        "fresco",
        "conten",
        "gruppo",
        "passat",
        "feriti",
        "abbiam",
        "chiama",
        "notare",
        "vestir",
        "cambie",
        "chiudo",
        "quando",
        "nascon",
        "quadro",
        "sorrid",
        "casset",
        "restit",
        "mister",
        "metter",
        "affari",
        "voglia",
        "vorrei",
        "sospet",
        "lavora",
        "rispon",
        "pantal",
        "cadere",
        "frutta",
        "bisogn",
        "sorris",
        "ammira",
        "fumare",
        "scopri",
        "stiamo",
        "salire",
        "genere",
        "guarda",
        "impara",
        "attesa",
        "sentir",
        "nascer",
        "torner",
        "mestie",
        "salire",
        "risolv",
        "toccar",
        "cresci",
        "leggim",
        "terrib",
        "guidat",
        "diritt",
        "scrivi",
        "arriva",
        "sistem",
        "comand",
        "solita",
        "rispon",
        "cerchi",
        "fuggir",
        "sostie",
        "scopri",
        "abbiam",
        "sentir",
        "leggim",
        "quando",
        "romanz",
        "prendi",
        "voglio",
        "compra",
        "potere",
        "prendi",
        "uccidi",
        "guardi",
        "parlai",
        "guarda",
        "prendi",
      ];
      

      useEffect(() => {
        const indiceParola = Math.floor(Math.random() * paroleItaliane5.length);
        setParolaCorretta(() => paroleItaliane5[indiceParola].split(''))
    }, []);

    

    useEffect(() => {
        console.log("Array of words:", arrayParole1);
    }, [arrayParole1]);

    function handleInvio(){
        if(rowIndex <= 5 && cellIndex > 4 && paroleItaliane5.includes(parolaCorretta)){
            console.log("Cell index:", cellIndex)
            setRowIndex(rowIndex + 1);
            setCellIndex(0);
            setArrayParole1(prevArray => [...prevArray, tentativo]);
            setTentativo("");
            console.log("Row index:", rowIndex)
            console.log("Parola corretta:", parolaCorretta)

            // CONTROLLO PER VEDERE SE LE LETTERE DELLA PAROLA INSERITA SONO PRESENTI NELLA PAROLA CORRETTA

            for(let i = 0; i < parolaCorretta.length; i++){
                for(let j = 0; j < tentativo.length; j++) {
                    if(parolaCorretta[i] === tentativo[j]){
                        setLettereUguali(letteraUgualePrecedente => [...letteraUgualePrecedente, tentativo[j]]) // DIVENTARE GIALLE
                    }
                }
            }

            // CONTROLLO PER VEDERE SE LE PAROLE CHE SONO PRESENTI SONO NELLA POSIZIONE CORRETTA

            for(let i = 0; i < parolaCorretta.length; i++){
                if(parolaCorretta[i] === tentativo[i]){
                    setIndiciUguali(indiceUgualePrecedente => [...indiceUgualePrecedente, [tentativo[i]]]) // DIVENTARE VERDI
                }
            }

        } else {
            return null
        }
    }

    useEffect(() => {
        console.log('Lettere uguali:', lettereUguali)
        console.log('Indici uguali:', indiciUguali) 
        console.log('Parola corretta:', parolaCorretta)
        console.log('Tentativo:', tentativo)
    }, [lettereUguali, indiciUguali, parolaCorretta, tentativo])


    function handleDelete() {
        const wordCells = document.querySelectorAll('.wordCellsContainer')[rowIndex].children;
    
        if (cellIndex > 0) {
            wordCells[cellIndex - 1].innerText = "";
            
            setCellIndex(cellIndex - 1);

            setTentativo(prevTentativo => prevTentativo.slice(0, -1));
    
        }
    }



    return (
        <div className="tastiera">
            {rows.map((row, index) => (
                <div className="row" key={index}>
                    {row.map((key, keyIndex) => (
                        <InputButton
                            key={keyIndex}
                            rowIndex={rowIndex}
                            cellIndex={cellIndex}
                            setTentativo={setTentativo}
                            setCellIndex={setCellIndex}
                            lettera={key}
                            clickFunction={key === 'INVIO' ? handleInvio : (key === 'DELETE' ? handleDelete : undefined)}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}