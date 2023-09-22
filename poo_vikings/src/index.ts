import { Character } from './Personnage';
import { Armurerie } from './armurerie';
import * as readline from 'readline';
import { getJobFromString } from './characterutils'; // Importez la fonction depuis le fichier approprié

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function genererCarac() {
    rl.question("Quel type de personnage voulez-vous créer ? (viking, archer, chevalier, magicien) : ", (type: string) => {
        const job = getJobFromString(type); // Utilisez la fonction pour obtenir une instance de personnage
        if (job) {
            const Héros = new Character("Héros", job, Armurerie.choisirArmeAleatoire(), Armurerie.choisirArmureAleatoire());
            const arme = Armurerie.choisirArmeAleatoire();
            const armure = Armurerie.choisirArmureAleatoire();
            Héros.arme = arme;
            Héros.armure = armure;
            console.log(Héros);
            rl.close();
        } else {
            console.log("Veuillez choisir un type de personnage valide.");
            genererCarac();
        }
    });
}

genererCarac();
