import { Character } from './Character';
import { Armurerie } from './Objets/Armory';
import * as readline from 'readline';
import { getJobFromString, FormatJobInput } from './CharacterUtils';
import { Battle } from './Battle';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let hero: Character;
let enemy: Character;
let attacker: Character;
let defender: Character;


async function createCharacters(): Promise<void> {
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

async function main() {
    await createCharacters();
    if (hero.vitesse > enemy.vitesse) {
        hero = attacker;
        enemy = defender;
    } else {
        hero = defender;
        enemy = attacker;
    }
console.log(hero);

    const battle = new Battle(hero, enemy);
    while (hero.sante > 0 && enemy.sante > 0) {
        battle.turn();
    }
}

main();
