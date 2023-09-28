import { Character } from './Character';
import { SpellBook } from './SpellBook';
import { Armurerie } from './armurerie';
import * as readline from 'readline';
import { getJobFromString, FormatJobInput } from './characterutils';
import { Battle } from './battle';
import { Wizard } from './jobs/magicien';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let hero: Character;
let enemy: Character;


function createCharacters(): Promise<void> {
    return new Promise((resolve, reject) => {
        rl.question("Quel type de personnage voulez-vous créer ? (viking, archer, chevalier, magicien, voleur) : ", (type: string) => {
            const formattedType = FormatJobInput(type);
            const job = getJobFromString(formattedType);

            const weaponHero = Armurerie.choisirArmeAleatoire();
            const armorHero = Armurerie.choisirArmureAleatoire();
            const weaponEnemy = Armurerie.choisirArmeAleatoire();
            const armorEnemy = Armurerie.choisirArmureAleatoire();

            if (job) {
                hero = new Character("Héros", job, weaponHero, armorHero);
                enemy = new Character("Ennemi", job, weaponEnemy, armorEnemy);

                rl.close();
                resolve();
            } else {
                console.log("Veuillez choisir un type de personnage valide.");
                reject("Type de personnage invalide");
            }
        });
    });
}

createCharacters()