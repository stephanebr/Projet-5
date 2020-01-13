/***
*Déclaration des tableaux
*************************/
const sujets = [
    "Patrick",
    "Arnaud",
    "Amélie",
    "Corinne",
    "Pascal"
];

const verbes = [
    "est",
    "dort",
    "tombe",
    "part",
    "mange"
];

const complements = [
    "malade",
    "au supermarché",
    "au travail",
    "à la piscine",
    "au sport"
];


const phrases = [];


/***
*Créer la phrase
***************************/
function creerPhrase() {
    let phrase = elementAleatoire(sujets) + " " + elementAleatoire(verbes) + " " + elementAleatoire(complements);

    //Si la phrase existe déjà alors ré-exécuter la fonction creerPhrase
    if (phrases.includes(phrase)) {
       return creerPhrase(); //Récursivité
    }

    return phrase;
}


/***
*@tableau : Array
*
*Créer l'index aléatoirement
****************************/
function indexAleatoire(tableau) {
    return Math.floor(Math.random() * tableau.length);
}

/***
*@elements : Array
*
*Créer élément aléatoirement
****************************/
function elementAleatoire(elements) {
   return  elements[indexAleatoire(elements)];
}


/***
*Affiche les phrases dans la console
************************************/
function afficherPhrase() {
    //Boucle 10 fois
    for (let i = 0; i < 10; i++) {
        phrases.push(creerPhrase()); //Ajoute les phrases dans le tableau phrases
    }
    console.log(phrases);
}

afficherPhrase();//Exécution de la fonction
