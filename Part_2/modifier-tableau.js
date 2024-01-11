function modifierTableau(tableau) {
    tableau.push("élément1", "élément2", "élément3");
    tableau.pop();
    return tableau;
}

console.log(modifierTableau([1, 2, 3]));
