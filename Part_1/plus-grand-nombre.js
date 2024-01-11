function trouverLePlusGrandNombre(tableau) {
    let max = tableau[0];
    for (let i = 1; i < tableau.length; i++) {
        if (tableau[i] > max) {
            max = tableau[i];
        }
    }
    return max;
}

let nombres = [3, 5, 2, 8, 1];
console.log(`Le plus grand nombre est : ${trouverLePlusGrandNombre(nombres)}`);
