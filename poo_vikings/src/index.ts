import { Character } from './Personnage';
import { Armurerie } from './armurerie';
import { Battle } from './battle';
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function genererCarac() {
    rl.question("Quel type de personnage voulez-vous créer ? (viking, archer, chevalier, magicien) : ", (type: string) => {
        while (type !== "viking" && type !== "archer" && type !== "chevalier" && type !== "magicien") {
            console.log("Type de personnage invalide. Veuillez choisir parmi viking, archer, chevalier, magicien.");
            rl.question("Quel type de personnage voulez-vous créer ? (viking, archer, chevalier, magicien) : ", (newType: string) => {
                type = newType;
            });
        }
        const arme = Armurerie.choisirArmeAleatoire();
        const armure = Armurerie.choisirArmureAleatoire();
        const Héros = new Character("Héros",type, arme, armure);
        console.log(Héros);
        rl.close();
    });
}

genererCarac();
