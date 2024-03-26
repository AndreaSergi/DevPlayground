import { useState, useEffect } from "react";
import {InputButton} from "./InputButton"
import { RowGrid } from './RowGrid';
import {ParoleGrid} from './ParoleGrid'


export function Tastiera({onInvio, rowIndex, setRowIndex}){
    const [cellIndex, setCellIndex] = useState(0);
    const [tentativo, setTentativo ] = useState("")
    const [arrayParole1, setArrayParole1] = useState([])
    const [parolaCorretta, setParolaCorretta] = useState('')
    const [arrayDiLetterePuzzolenti, setArrayDiLetterePuzzolenti] = useState([])
    const [arrayDiLettereGiuste, setArrayDiLettereGiuste] = useState([])
    
    const rows = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['Z', 'X', 'C', 'V', 'B', 'N', 'M', 'INVIO', 'DEL']
    ]


    // const paroleItaliane5 = [
    //     "fiera",
    //     "rosso",
    //     "piano",
    //     "sedia",
    //     "grano",
    //     "fiume",
    //     "lampo",
    //     "sogno",
    //     "miele",
    //     "manto",
    //     "terra",
    //     "verde",
    //     "pazza",
    //     "corpo",
    //     "fogna",
    //     "donna",
    //     "stelo",
    //     "piede",
    //     "pollo",
    //     "fiore",
    //     "peste",
    //     "scala",
    //     "canna",
    //     "culla",
    //     "notte",
    //     "scala",
    //     "dolce",
    //     "pieno",
    //     "vista",
    //     "forza",
    //     "guida",
    //     "vetro",
    //     "cielo",
    //     "notte",
    //     "culla",
    //     "lampo",
    //     "canto",
    //     "occhi",
    //     "sonno",
    //     "padre",
    //     "ombra",
    //     "cacao",
    //     "secco",
    //     "burro",
    //     "denti",
    //     "luogo",
    //     "terra",
    //     "legno",
    //     "meteo",
    //     "monte",
    //     "palla",
    //     "scena",
    //     "fiera",
    //     "mente",
    //     "porto",
    //     "dente",
    //     "canto",
    //     "lucro",
    //     "scala",
    //     "copia",
    //     "pista",
    //     "scalo",
    //     "scena",
    //     "volta",
    //     "figli",
    //     "sinus",
    //     "sedia",
    //     "giuro",
    //     "guano",
    //     "giuro",
    //     "spina",
    //     "tempi",
    //     "tasso",
    //     "trama",
    //     "sogno",
    //     "messa",
    //     "ragno",
    //     "grado",
    //     "donna",
    //     "stamp",
    //     "panno",
    //     "norma",
    //     "lampo",
    //     "golfo",
    //     "guano",
    //     "gusto",
    //     "stria",
    //     "fiume",
    //     "pazza",
    //     "spada",
    //     "grana",
    //     "brama",
    //     "mossa",
    //     "villa",
    //     "pazza",
    //     "fetta",
    //     "nervo",
    //     "acqua",
    //     "pesca",
    //     "becco",
    //     "vista",
    //     "pieno",
    //     "folla",
    //     "botta",
    //     "risma",
    //     "magra",
    //     "terme",
    //     "piaga",
    //     "parco",
    //     "patto",
    //     "squad",
    //     "vista",
    //     "pazzo",
    //     "tavol",
    //     "pelle",
    //     "sogno",
    //     "scopo",
    //     "buono",
    //     "folla",
    //     "gamma",
    //     "venne",
    //     "lotta",
    //     "frodo",
    //     "mimmo",
    //     "prono",
    //     "retto",
    //     "vasta",
    //     "anima",
    //     "metto",
    //     "stiva",
    //     "verbo",
    //     "scema",
    //     "virgo",
    //     "gotta",
    //     "fugge",
    //     "scalo",
    //     "chiar",
    //     "prese",
    //     "corpo",
    //     "guano",
    //     "tovag",
    //     "curvo",
    //     "merlo",
    //     "stola",
    //     "lotto",
    //     "firma",
    //     "mista",
    //     "stiva",
    //     "comun",
    //     "sesto",
    //     "rondo",
    //     "trama",
    //     "bagno",
    //     "tagli",
    //     "fiato",
    //     "scudo",
    //     "vista",
    //     "ricco",
    //     "sello",
    //     "porto",
    //     "bosco",
    //     "zolla",
    //     "scena",
    //     "campo",
    //     "ruota",
    //     "senso",
    //     "botte",
    //     "tomba",
    //     "sorgo",
    //     "bosco",
    //     "fucil",
    //     "donna",
    //     "buona",
    //     "culla",
    //     "bocca",
    //     "folla",
    //     "curva",
    //     "pista",
    //     "tavol",
    //     "barca",
    //     "lotta",
    //     "spada",
    //     "costa",
    //     "risma",
    //     "zocco",
    //     "polio",
    //     "pieno",
    //     "bieta",
    //     "selva",
    //     "bioma",
    //     "cerbo",
    //     "suola",
    //     "stola",
    //     "spola",
    //     "frode",
    //     "lavor",
    //     "vento",
    //     "sugli",
    //     "lavor",
    //     "suole",
    //     "buono",
    //     "picco",
    //     "scato",
    //     "stesa",
    //     "metto",
    //     "corso",
    //     "farlo",
    //     "pette",
    //     "metto",
    //     "corso",
    //     "scema",
    //     "scato",
    //     "rospo",
    //     "musco",
    //     "salmo",
    //     "prono",
    //     "verbo",
    //     "bieta",
    //     "teore",
    //     "verme",
    //     "sopra",
    //     "risma",
    //     "stoca",
    //     "soffi",
    //     "musco",
    //     "verba",
    //     "folla",
    //     "spola",
    //     "maius",
    //     "veste",
    //     "sugli",
    //     "corso",
    //     "vetri",
    //     "vento",
    //     "vetro",
    //     "spesa",
    //     "grifo",
    //     "corsi",
    //     "corsa",
    //     "costa",
    //     "copia",
    //     "viggo",
    //     "pesto",
    //     "polio",
    //     "vesto",
    //     "piano",
    //     "bocca",
    //     "tomba",
    //     "lavor",
    //     "cuore",
    //     "lento",
    //     "copio",
    //     "corto",
    //     "visto",
    //     "scopa",
    //     "risma",
    //     "pieno",
    //     "scopa",
    //     "sopra",
    //     "stola",
    //     "vesta",
    //     "cesto",
    //     "petto",
    //     "peste",
    //     "stoic",
    //     "pieta",
    //     "posto",
    //     "carbo",
    //     "stima",
    //     "scopa",
    //     "bruma",
    //     "matto",
    //     "basso",
    //     "lotta",
    //     "scopa",
    //     "pesto",
    //     "corsi",
    //     "musco",
    //     "soffi",
    //     "rospo",
    //     "stoca",
    //     "calmo",
    //     "vista",
    //     "muovo",
    //     "sfera",
    //     "ruoto",
    //     "rospo",
    //   ];
      
      const paroleItaliane5 = [
        "abaco", "abate", "abbai", "abbia", "abeti", "abile", "abito", "abusa", "acari", "acero",
        "aceto", "acida", "acino", "acqua", "acume", "acuti", "adagi", "addio", "adipe", "adito",
        "adone", "adori", "adula", "aduso", "aerea", "aereo", "afidi", "afona", "afoso", "agape",
        "agata", "agave", "agile", "agire", "agito", "aglio", "agone", "aiuto", "alate", "album",
        "alcol", "alghe", "alibi", "alice", "alito", "alone", "altra", "alveo", "alzai", "amaca",
        "amala", "amaro", "amato", "amavo", "ambra", "ameba", "ameni", "amici", "amido", "amore",
        "ampio", "anche", "ancia", "andai", "anelo", "aneto", "anice", "animo", "annoi", "annuo",
        "anodo", "ansia", "antro", "aorta", "apice", "apnea", "aprii", "arabi", "arare", "archi",
        "ardua", "arena", "arida", "armai", "arnia", "aroma", "arpie", "ascia", "asilo", "asino",
        "asola", "aspri", "assai", "astio", "astro", "atomo", "atrio", "audio", "aureo", "avari",
        "avena", "avere", "avido", "avito", "avolo", "avrai", "avuto", "avvio", "azero", "azoto",
        "babau", "babbo", "bacca", "bachi", "bacio", "badai", "badia", "baffi", "bagno", "baita",
        "baldo", "balia", "balle", "ballo", "balsa", "balzo", "bambu", "banca", "banco", "bande",
        "barai", "barba", "barca", "bardo", "bario", "barra", "basco", "basso", "basta", "basto",
        "batte", "baule", "bazar", "bazza", "beato", "becco", "beffa", "beghe", "belga", "bello",
        "belva", "benda", "beone", "berci", "berlo", "biada", "bidet", "bieco", "bieta", "bigia",
        "bimba", "bioma", "birba", "birra", "bisca", "bisce", "bitta", "bivio", "bizze", "blesa",
        "blusa", "boato", "bocca", "bocce", "bolla", "bollo", "bomba", "bongo", "bordi", "borgo",
        "borie", "borsa", "bosco", "botte", "botti", "bozza", "brace", "brado", "brame", "brano",
        "bravi", "breve", "briga", "brina", "brodo", "bruci", "bruco", "bruma", "bruno", "bruti",
        "bucce", "buchi", "budda", "buffa", "bugie", "bulbo", "bullo", "buono", "burla", "burro",
        "busso", "busta", "busti", "butta", "cacao", "cachi", "cacio", "cadde", "cagna", "calai",
        "calca", "calce", "calci", "calco", "caldo", "calli", "calme", "calva", "calze", "cambi",
        "cameo", "camma", "campa", "campo", "canea", "canna", "canoa", "canto", "capii", "cappa",
        "capra", "cardo", "cargo", "carie", "carme", "carne", "carpa", "carro", "carso", "carta",
        "carte", "casba", "casco", "cassa", "casse", "casta", "causa", "cauto", "cavai", "cavia",
        "cecio", "cedro", "ceduo", "ceffo", "celai", "celia", "cella", "celti", "cenai", "cenci",
        "cenge", "cenno", "censo", "cento", "ceppo", "cerco", "cerro", "certa", "cervo", "cesio",
        "cespo", "cesso", "cesta", "cetra", "chela", "cheta", "chilo", "china", "cibai", "cicca",
        "ciclo", "cieca", "cielo", "cifra", "cigli", "cigno", "cinse", "cinta", "cippo", "circa",
        "circo", "cirri", "cisti", "citai", "ciuco", "clava", "clero", "clima", "clone", "cloro",
        "clown", "cobra", "cocci", "cocco", "coesa", "coevo", "coffa", "colai", "colgo", "colla",
        "collo", "colma", "colmo", "colon", "colpe", "colpi", "colse", "colta", "colui", "colza",
        "comma", "conca", "conci", "conga", "conio", "conta", "conte", "conto", "copia", "coppa",
        "coppi", "copri", "corda", "corna", "corpo", "corra", "corsa", "corso", "corte", "corto",
        "corvi", "cosca", "cosce", "cosmo", "costa", "costi", "cotta", "covai", "cozze", "cozzo",
        "crani", "crasi", "creai", "credo", "crema", "crepe", "crepi", "creta", "crine", "crisi", "croce", "croco", "croda", "croma", "cromo",
        "cruda", "cruna", "cucce", "cucio", "culla", "culto", "cunei", "cuoca", "cuoio", "cuore",
        "curai", "curda", "curia", "curio", "curry", "curva", "daino", "dalia", "dammi", "danno",
        "danza", "dardo", "dazio", "degna", "denso", "denti", "desco", "desio", "desta", "detto",
        "diade", "diari", "dicco", "dieci", "dieta", "dighe", "dillo", "dimmi", "diodo", "direi",
        "dirmi", "disco", "disfa", "disto", "ditta", "docce", "doghe", "dogma", "dolce", "domai",
        "donna", "doppi", "dorma", "dorso", "dossi", "dotta", "draga", "drago", "droga", "drone",
        "drupa", "duale", "dubbi", "duchi", "duole", "duomo", "ebano", "ebbro", "ebete", "ebreo",
        "edema", "edera", "edile", "educa", "efebo", "egizi", "elevo", "elica", "elogi", "eludo",
        "emana", "emiro", "emoji", "emulo", "entra", "epica", "epoca", "epuro", "erano", "eredi",
        "eremo", "erica", "erigo", "ernia", "eroga", "eroso", "errai", "esame", "esche", "esigo",
        "esile", "esito", "esodo", "esoso", "espio", "estro", "esule", "etano", "etere", "etica",
        "etimo", "etnea", "etnia", "evaso", "evita", "evoco", "extra", "facce", "faggi", "faida",
        "faina", "falce", "falco", "falde", "fallo", "falso", "fammi", "fango", "fanno", "fante",
        "farne", "farro", "farsa", "fasce", "fatto", "fatuo", "fauci", "fauna", "felce", "felpa",
        "ferie", "fermo", "ferro", "fesso", "festa", "fetta", "feudo", "fiabe", "fiala", "fiato",
        "fibra", "fichi", "fieno", "fiera", "fiero", "figli", "finge", "finto", "fioca", "fiore",
        "firma", "fisco", "fissa", "fitto", "fiume", "fiuto", "flebo", "flora", "fobia", "foche",
        "fogli", "fogne", "foibe", "folla", "folle", "folto", "fondo", "fonte", "forca", "forma",
        "forno", "forra", "forse", "forte", "forum", "forza", "fosco", "fossa", "fosse", "foste",
        "frana", "frase", "frasi", "frate", "frega", "fregi", "fremo", "freno", "fresa", "frigo",
        "frode", "fruga", "fughe", "fulva", "fumai", "fummo", "funge", "fungo", "fuoco", "fuori",
        "furba", "furia", "furto", "fusto", "galea", "gallo", "gamba", "gambo", "gamma", "ganci",
        "ganzo", "garbo", "garza", "gassa", "gatto", "gazza", "gechi", "gelso", "gemma", "genio",
        "gente", "gergo", "germe", "gesso", "gesti", "getto", "ghiro", "ghisa", "giace", "giada",
        "giara", "gigli", "gioco", "giogo", "gioia", "giova", "girai", "giuro", "glifo", "globo",
        "gnomo", "gnosi", "gobba", "gocce", "goffe", "gogna", "golfo", "gomma", "gonfi", "gonna",
        "gonzo", "gorgo", "gotta", "gozzo", "gradi", "grafo", "grama", "grana", "grano", "grata",
        "grato", "grave", "greco", "greto", "greve", "grida", "grigi", "grumo", "guado", "guaio",
        "guano", "guida", "gusci", "gusto", "hanno", "hotel", "icona", "idolo", "iella", "igneo",
        "ilare", "imita", "inizi", "invio", "iodio", "iride", "isola", "istmo", "jeans", "kappa",
        "karma", "koala", "lacca", "lacci", "ladro", "laghi", "lagna", "laico", "lampo", "lance",
        "lanci", "lardo", "largo", "larva", "lasci", "lasco", "laser", "latta", "latte", "lavai",
        "leale", "lecca", "lecci", "legai", "legge", "leggo", "leghe", "legna", "legno", "lembo",
        "lemma", "lenta", "lenza", "leone", "lepri", "lerci", "lesso", "lesta", "letto", "liana",
        "libro", "liceo", "lieta", "lieve", "ligio", "limbo", "lince", "linda", "linea", "linfa",
        "lisca", "lisci", "lista", "litio", "litro", "liuto", "lizza", "lobby", "lombi", "lonza",
        "lorde", "losco", "lotta", "lotti", "lucci", "lucro", "lunga", "luogo", "lusso", "lutto","madre", "mafia", "maghi", "magia", "magma", "magro", "malga", "mallo", "malta", "mambo", "mamma", "manca", "mance", "mandi", "mangi", "mango", "mania", "manna", "manto", "manzo","mappa", "marca", "marce", "marea",
        "marmo", "marna", "marre", "marzo", "masai", "massa", "masso", "matto", "mazza", "mazzo",
        "mecca", "media", "melma", "mensa", "menta", "mento", "merce", "merlo", "messa", "mesta",
        "meteo", "metro", "metto", "mezzo", "micce", "micio", "miele", "mille", "milza", "miope",
        "mirto", "misto", "mitra", "modem", "mogio", "mogli", "molla", "molti", "monca", "mondo",
        "monte", "morbo", "morda", "morsa", "morso", "morti", "mosca", "mosci", "mossa", "mosto",
        "motto", "mozzi", "mucca", "muffa", "mughi", "multa", "muoio", "muone", "muovi", "museo",
        "mutuo", "nafta", "nanna", "nappa", "narri", "nasce", "nassa", "natia", "nause", "negai",
        "negli", "nembo", "nenia", "nerbo", "nervi", "nesso", "netto", "nevai", "ninfa", "ninja",
        "niveo", "nocca", "nomea", "nonio", "nonna", "norme", "notai", "notte", "nozze", "nuche",
        "nulla", "nuoce", "nuora", "nuoto", "nuovo", "nutre", "nylon", "obesi", "obice", "oblio",
        "obolo", "occhi", "odino", "odore", "offro", "ogiva", "oliai", "olive", "oltre", "ombra",
        "omega", "omero", "omino", "omise", "omone", "oncia", "oneri", "onice", "onore", "opaco",
        "opera", "opino", "oppio", "optai", "orafe", "orale", "orari", "orata", "orchi", "orcio",
        "ordii", "orgia", "ormai", "osare", "ossea", "ossia", "ostia", "ostro", "otite", "ovaia",
        "ovale", "ovest", "ovile", "ovini", "ovulo", "ovvio", "oziai", "ozono", "pacca", "pacco",
        "padre", "paese", "paggi", "paghe", "palco", "palio", "palla", "palle", "palma", "palmo",
        "palpo", "pampa", "panca", "pance", "panda", "panna", "panne", "panno", "pappa", "parco",
        "pareo", "paria", "parlo", "parso", "parte", "parti", "parto", "parve", "passa", "passi",
        "passo", "pasta", "pasto", "patio", "patta", "patto", "paura", "pausa", "pazzi", "peana",
        "pecca", "pecco", "pegni", "pelai", "pelle", "pelli", "penai", "pende", "penna", "penne",
        "pensa", "peplo", "perde", "perla", "perno", "perso", "pesai", "pesca", "pesce", "pesco",
        "peste", "pesto", "petto", "pezzo", "piace", "piada", "piaga", "piano", "picco", "piede",
        "piega", "piena", "pieve", "pigio", "pigli", "pigna", "pigro", "pinna", "pinne", "pinta",
        "pinza", "pioli", "piove", "pista", "piuma", "pizza", "pizzo", "plebe", "plico", "pochi",
        "podio", "poema", "poeta", "poggi", "polio", "pollo", "polpa", "polpo", "polso", "pompa", "ponfo", "pongo", "ponte", "poppa", "porci", "porge", "porre", "porro", "porta", "porto",
        "posai", "posso", "posta", "posto", "pozza", "pozzi", "prato", "preda", "prego", "premi", "presa", "preso", "prete", "prima", "primo", "privo", "probo", "prode", "prole", "prono",
        "prora", "prosa", "prove", "prude", "pruno", "puffi", "pugni", "pulce", "pulsa", "punge",
        "punta", "punti", "purga", "puzzi", "quale", "quasi", "quota", "radio", "raggi", "ragno",
        "rampa", "randa", "rango", "rasoi", "raspa", "raspo", "ratti", "ratto", "rauca", "razza",
        "razzo", "reale", "reame", "reato", "rebbi", "rebus", "recai", "reggo", "regia", "regio",
        "regno", "relax", "remai", "rende", "renna", "ressa", "resto", "retro", "retta", "retto",
        "ribes", "ricci", "ricco", "ridda", "riffa", "righe", "rione", "risma", "rissa", "ritmi",
        "ritto", "riuso", "robot", "rocca", "rocce", "roche", "rodeo", "rogge", "roghi", "rogna", "rombo", "rompa", "ronda", "ronfa", "rosea", "rospo",
        "rossa", "rotta", "rozza", "rubai", "rubli", "rughe", "rullo", "rumba", "ruolo", "ruota",
        "rupia", "ruppe", "ruspa", "russo", "rutto", "ruzzo", "sabba", "sacco", "sacre", "saggi",
        "saghe", "sagra", "saldo", "salma", "salmo", "salpo", "salsa", "salto", "salve", "samba",
        "sanno", "sansa", "santa", "sappi", "sarde", "sarei", "sarti", "sasso", "sauna", "savio",
        "sazio", "sbafo", "sbavi", "sbuca", "scade", "scafo", "scala", "scali", "scavo", "scemi",
        "scena", "sceso", "schwa", "sciai", "scolo", "scopa", "scopo", "scova", "scudo", "scure",
        "scusa", "secca", "secco", "sedia", "seggi", "seghe", "segno", "seguo", "selci", "sella",
        "selva", "senno", "senso", "sento", "senza", "seppi", "serbo", "serie", "serio", "serpe",
        "serra", "serro", "servi", "sesso", "sesto", "setta", "sette", "setto", "sfamo", "sfera",
        "sfida", "sfila", "sfizi", "sfogo", "sfumo", "sfuso", "siamo", "sidro", "siedi", "siepe",
        "siero", "sigla", "sigma", "sinti", "sisma", "slavi", "slego", "slogo", "smise", "snodi",
        "soave", "sobri", "socio", "sodio", "soffi", "sogno", "solai", "solco", "soldi", "solfa",
        "somma", "sommo", "sonda", "sonno", "sopra", "sorbo", "sorci", "sordi", "sorge", "sorso",
        "sorto", "sosia", "sosta", "sotto", "sozza", "spada", "spago", "sparo", "spazi", "speck",
        "spelo", "spera", "spesa", "spiga", "spine", "spira", "spola", "spore", "sport", "sposi",
        "spuma", "sputo", "stadi", "stare", "stato", "stavi", "stelo", "stesa", "stile", "stima",
        "stiro", "stiva", "stola", "stona", "studi", "stufo", "sturo", "succo", "sudai", "sughi",
        "sugli", "sugna", "suino", "sunto", "suola", "suolo", "suono", "suore", "svago", "svaso",
        "svelo", "svevo", "svito", "tacca", "tacco", "tagli", "taiga", "talco", "talea", "tallo",
        "talpa", "tanfo", "tango", "tanto", "tappe", "tappo", "tardi", "targa", "tarlo", "tarme",
        "tarpo", "tarso", "tasca", "tassa", "tasso", "tasto", "tatto", "tatuo", "tazza", "teche",
        "tecno", "tedio", "tempo", "tenda", "tende", "tengo", "tenia", "tenni", "tento", "tenue",
        "teppa", "terga", "terme", "terna", "terra", "tersa", "terzo", "tesse", "testa", "teste",
        "testo", "tetro", "tetto", "tibia", "tieni", "tigli", "tigna", "tigre", "tilde", "tinta",
        "tirai", "tizio", "tocca", "toghe", "togli", "tolda", "tolta", "tomba", "tonda", "tonfo",
        "tonno", "tonti", "toppa", "torba", "torce", "tordo", "torme", "torni", "torre", "torso",
        "torta", "torto", "torve", "tosai", "tosse", "tosta", "totem", "tozza", "trama", "trave",
        "tremo", "treno", "trino", "trito", "trono", "trota", "trova", "tuffo", "tulle", "tuono",
        "turbe", "turco", "turno", "turpe", "tutte", "ubbia", "udire", "udito", "udiva", "uggia",
        "ugola", "ulivo", "ulula", "umana", "umida", "umile", "umore", "umori", "unico", "unire",
        "unito", "univa", "upupa", "urina", "urlai", "usano", "usare", "usato", "usavi", "uscio",
        "usura", "utero", "utile", "utili", "vacca", "vacuo", "vaghe", "valgo", "valle", "vanga",
        "vanno", "vanto", "varco", "varie", "vasai", "vasca", "vasto", "vegli", "velai", "vello",
        "vendo", "venga", "venia", "venti", "vento", "verbo", "verde", "verga", "vermi", "versi",
        "verso", "verza", "vespa", "veste", "vetro", "vetta", "vezzo", "viale", "vibra", "video",
        "vieni", "vieto", "vigna", "villa", "vinai", "vinco", "vinse", "vinti", "viola", "viole",
        "virus", "vispa", "visse", "vista", "visto", "vitto", "vizio", "vizzo", "vocio", "voghi", "volai",
        "volge", "volle", "volpe", "volta", "volto", "vulva", "vuole", "vuoti", "zaino", "zampa",
        "zanne", "zappa", "zebra", "zecca", "zeppa", "zeppo", "zinco", "zirlo", "zitti", "zolfo",
        "zolla", "zompo", "zonzo", "zoppo", "zozze", "zucca", "zuffa", "zuppa"   
    ]
      


      useEffect(() => {
          const indiceParola = Math.floor(Math.random() * paroleItaliane5.length);
          setParolaCorretta(() => paroleItaliane5[indiceParola].split(''))
        }, []);


        useEffect(()=>{

            console.log("Parola corretta:", parolaCorretta)
        },[parolaCorretta])
        
        console.log("-----------------------------------------------")
// -----------------------------------------------------------------------------

    function provaTest(parola1, parola2){
        let oggettoOccorrenze = {}
        parola2.split("").forEach(element => {
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


// ---------------------------------------------------------------------------
            
        function handleInvio() {

            if (rowIndex <= 5 && cellIndex > 4) {
                setRowIndex(rowIndex + 1);
                setCellIndex(0);
                setArrayParole1(prevArray => [...prevArray, tentativo]);
        
                const tentativoLowercase = tentativo.toLowerCase();
                const tentativoArray = tentativoLowercase.split('');
                

                console.log("AAAAAAAAAAAAAAAAAAAAAAAAA",tentativo, parolaCorretta)
                
                const oggettoOccorrenze = provaTest(parolaCorretta, tentativoLowercase)



                // Trova gli indici uguali
                const nuoviIndiciUguali = tentativoArray.map((element, index) => {
                    if(parolaCorretta[index] === element){
                        const letteraGiusta = element
                        setArrayDiLettereGiuste(prevArray => [...prevArray, letteraGiusta])
                        console.log("letteraGiusta", letteraGiusta)
                        console.log("arrayletteraGiusta", arrayDiLettereGiuste)
                    if(oggettoOccorrenze[element] > 0){
                        oggettoOccorrenze[element] --
                        return index
                    }
                }
                }).filter((lettera)=>(lettera != null));

                // Trova le lettere uguali
                const nuoveLettereUguali = tentativoArray.map((element, index) => {
                    if(oggettoOccorrenze[element] > 0){
                        oggettoOccorrenze[element] --
                        console.log("coloro di giallo", element)
                        return index
                    } else {
                        const letteraChePuzza = element
                        setArrayDiLetterePuzzolenti((prevArray) => [...prevArray, letteraChePuzza])
                        console.log("suca",letteraChePuzza)
                    }
                }).filter((lettera)=>(lettera != null));

                console.log("NUOVO CONSOLLAZZO" ,nuoveLettereUguali)
                
                
                            

                onInvio(nuoveLettereUguali, nuoviIndiciUguali, oggettoOccorrenze)
                console.log(nuoviIndiciUguali)
                console.log('Nuove lettere uguali:', nuoveLettereUguali)

                setTentativo("");

                
            } else {
                return null;
            }
        }
  


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
                            puzza={arrayDiLetterePuzzolenti.includes(key.toLowerCase())}
                            giusta={arrayDiLettereGiuste.includes(key.toLowerCase())}
                            clickFunction={key === 'INVIO' ? handleInvio : (key === 'DEL' ? handleDelete : undefined)}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}