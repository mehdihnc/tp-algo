class Noeud {
    constructor(valeur) {
        this.valeur = valeur;
        this.suivant = null;
    }
}

class ListeChainee {
    constructor() {
        this.tete = null;
    }

    ajouter(valeur) {
        let nouveauNoeud = new Noeud(valeur);
        if (!this.tete) {
            this.tete = nouveauNoeud;
        } else {
            let actuel = this.tete;
            while (actuel.suivant) {
                actuel = actuel.suivant;
            }
            actuel.suivant = nouveauNoeud;
        }
    }

    afficher() {
        let actuel = this.tete;
        while (actuel) {
            console.log(actuel.valeur);
            actuel = actuel.suivant;
        }
    }
}

let liste = new ListeChainee();
liste.ajouter(1);
liste.ajouter(2);
liste.ajouter(3);
liste.afficher();
