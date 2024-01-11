function listerProprietes(personne) {
    return Object.keys(personne);
}

console.log(listerProprietes({ nom: "Alice", age: 30, profession: "Développeur" }));
