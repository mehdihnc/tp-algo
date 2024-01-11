function gestionPileTaches(taches) {
    let pile = [];
    taches.forEach(tache => pile.push(tache));
    
    while(pile.length > 0) {
        let tacheActuelle = pile.pop();
        console.log(`Traitement de la tâche: ${tacheActuelle}`);
    }
}


gestionPileTaches(["Tâche1", "Tâche2", "Tâche3"]);
