function modifierEtExtraire(tableau, nouvelElement) {
    tableau.shift();
    tableau.unshift(nouvelElement);
    return [tableau[0], tableau[1]];
}

console.log(modifierEtExtraire([1, 2, 3], 0));
