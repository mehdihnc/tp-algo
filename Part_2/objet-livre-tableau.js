function livreEnTableau(livre) {
    return Object.entries(livre);
}

console.log(livreEnTableau({ titre: "1984", auteur: "George Orwell", année: 1949 }));
