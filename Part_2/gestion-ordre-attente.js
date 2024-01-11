function gestionOrdreAttente() {
    let fileAttente = [];

    function ajouterVisiteur(nom) {
        fileAttente.push(nom);
    }

    function prochainVisiteur() {
        let visiteur = fileAttente.shift();
        console.log(`Visiteur entrant : ${visiteur}`);
        return visiteur;
    }

    return { ajouterVisiteur, prochainVisiteur };
}


let attente = gestionOrdreAttente();
attente.ajouterVisiteur("Alice");
attente.ajouterVisiteur("Bob");
console.log(attente.prochainVisiteur());
console.log(attente.prochainVisiteur());
