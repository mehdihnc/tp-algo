function compterOccurrences(lettre, chaine) {
    let compteur = 0;
    for (let i = 0; i < chaine.length; i++) {
        if (chaine[i] === lettre) {
            compteur++;
        }
    }
    return compteur;
}


let chaine = "Bonjour le monde";
let lettreACompter = "o";
console.log(`La lettre "${lettreACompter}" apparaît ${compterOccurrences(lettreACompter, chaine)} fois dans la chaîne.`);
