import { Character } from './Personnage';
import { Armurerie } from './armurerie';
import * as readline from 'readline';
import { getJobFromString } from './characterutils';
import { FormatJobInput } from './characterutils';
import { Battle } from './battle';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let Héros: Character;
let character2: Character;

function genererCarac(): Promise<void> {
    return new Promise((resolve) => {
        rl.question("Quel type de personnage voulez-vous créer ? (viking, archer, chevalier, magicien,Voleur) : ", (type: string) => {
            const formatted = FormatJobInput(type)
            const job = getJobFromString(formatted);
            if (job) {
                Héros = new Character("Héros", job, Armurerie.choisirArmeAleatoire(), Armurerie.choisirArmureAleatoire());
                character2 = new Character("Ennemi", job, Armurerie.choisirArmeAleatoire(), Armurerie.choisirArmureAleatoire());
                const arme1 = Armurerie.choisirArmeAleatoire();
                const armure1 = Armurerie.choisirArmureAleatoire();
                const arme2 = Armurerie.choisirArmeAleatoire();
                const armure2 = Armurerie.choisirArmureAleatoire();
                Héros.arme = arme1;
                Héros.armure = armure1;
                character2.arme = arme2
                character2.armure = armure2;
                rl.close();
                resolve();
            } else {
                console.log("Veuillez choisir un type de personnage valide.");
                genererCarac();
            }
        });
    });
}

genererCarac().then(() => {
    if (Héros && character2) {
        const battle = new Battle(Héros, character2);
        const gagnant = battle.simulateBattle();
        console.log(`Le gagnant est : ${gagnant}`);
    }
});