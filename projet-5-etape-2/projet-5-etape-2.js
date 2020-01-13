/*******************
*   Déclaration des tableaux
****************************/
let phrases = [];

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

const autres_complements = [
    "lundi",
    "toute la journée",
    "tous les matins",
    "le soir",
    "tous les jours"
];


//Création de l'écouteur sur le bouton generer
document.getElementById("generer").addEventListener("click",(e) => {
    e.preventDefault(); //Ne pas envoyer le formulaire au serveur
    let type = document.getElementById("type").value; //Récupère le type de phrase
    let quantite = document.getElementById("quantite").value; // Récupère la quantité de phrase
    
    
    /*******************
    *   Si la quantité de phrase n'est pas comprise entre
    *   1 et 5, alors afficher une alerte et arret de l'exécution
    *************************************************************/
    if (quantite < 1 || quantite > 5) {
        alert("Le nombre choisi doit être compris entre 1 à 5 !");
        return false;
    }
    
    generer(type, quantite); //Exécution de la fonction generer
    afficher(); //Exécution de la fonction afficher
} );

/*********************
*Affiche les phrases
*********************/
function afficher() {
    document.getElementById("phrases").innerHTML = "";
    for(let i = 0; i < phrases.length; i++) {
        document.getElementById("phrases").innerHTML += phrases[i] + "<br>";
    }
}

/***********************
*@type = String
*@quantite = Number
*
*Génère les phrases aléatoirements
*************************************/
function generer(type, quantite) {
    phrases = [];
    
    for(let i = 0; i < quantite; i++) {
        phrases.push(_ecrire(type));
    }
}

/**********************
*@type = String
*
*Créer la phrase selon le type (court ou long)
***********************************************/
function _ecrire(type) {
    let phrase = _piocher(sujets) + " " + _piocher(verbes) + " " + _piocher(complements);
    
    if (type == "long") {
        phrase += " " + _piocher(autres_complements);
    }
    
    phrase += ".";
    
    /****************
    *Si la phrase existe déjà, ré-exécute la fonction _ecrire
    *********************************************************/
    if (phrases.includes(phrase)) {
       return _ecrire(type); //Récursivité
    }

    return phrase;
}

/**********************
*@tableau = Array
*
*Génére aléatoirement l'index du tableau
****************************************/
function _indexAleatoire(tableau) {
    return Math.floor(Math.random() * tableau.length);
}

/*****************************
*@element = String
*
*Retourne l'élément de la phrase
********************************/
function _piocher(elements) {
   return elements[_indexAleatoire(elements)];
}