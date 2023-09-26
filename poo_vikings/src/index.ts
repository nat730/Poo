import { Character } from './Character';
import { Armurerie } from './armurerie';
import * as readline from 'readline';
import { getJobFromString, FormatJobInput } from './characterutils';
import { Battle } from './battle';

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
            
            if (job) {
                hero = new Character("Héros", job, Armurerie.choisirArmeAleatoire(), Armurerie.choisirArmureAleatoire());
                enemy = new Character("Ennemi", job, Armurerie.choisirArmeAleatoire(), Armurerie.choisirArmureAleatoire());
                const heroWeapon = Armurerie.choisirArmeAleatoire();
                const heroArmor = Armurerie.choisirArmureAleatoire();
                const enemyWeapon = Armurerie.choisirArmeAleatoire();
                const enemyArmor = Armurerie.choisirArmureAleatoire();
                hero.arme = heroWeapon;
                hero.armure = heroArmor;
                enemy.arme = enemyWeapon;
                enemy.armure = enemyArmor;
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
    .then(() => {
        if (hero && enemy) {
            const battle = new Battle(hero, enemy);
            const winner = battle.simulateBattle();
            console.log(`Le gagnant est : ${winner}`);
        }
    })
    .catch((error) => {
        console.error(`Une erreur s'est produite : ${error}`);
    });
