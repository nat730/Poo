import { Viking } from "./viking";
import { Armurerie } from "./armurerie";
import { Battle } from "./battle";

function genererCarac() {
    const force = Math.floor(Math.random() * 21);
    let defense = Math.floor(Math.random() * 21);
    while (defense < 5) {
        defense = Math.floor(Math.random() * 21);
    }
    const defenseBinaire = Math.floor(Math.random() * 21);
    const sante = defense * 5;
    const arme = Armurerie.choisirArmeAleatoire();
    const armure = Armurerie.choisirArmureAleatoire();

    return { force, defense, defenseBinaire, sante, arme };
}

// const { force: force1, defense: defense1, defenseBinaire: defenseBinaire1, sante: sante1, arme: arme1,armure: armure1 } = genererCarac();
// const { force: force2, defense: defense2, defenseBinaire: defenseBinaire2, sante: sante2, arme: arme2, armure:armure2 } = genererCarac();

// const viking1 = new Viking ("Ragnar", sante1, force1, defense1, defenseBinaire1, arme1, 1, 0, "Viking", 0, 0, 0, 0, sante1, "arme", armure1);
// const viking2 = new Viking ("Astrid", sante2, force2, defense2, defenseBinaire2, arme2, 1, 0, "Viking", 0, 0, 0, 0, sante2, "arme", armure2);

// console.log(viking1);
// console.log(viking2);


