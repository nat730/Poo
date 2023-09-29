import { Character } from './Character';
import { Armurerie } from './Objets/Armory';
import * as readline from 'readline';
import { getJobFromString, FormatJobInput } from './CharacterUtils';
import { Battle } from './Battle';
import { Armor } from './Objets/Armor';
import { SpellBook } from './SpellBook';

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

                hero.defense = (armorHero[0]?.defense) + (armorHero[1]?.defense) + (armorHero[2]?.defense) + (armorHero[3]?.defense);
                enemy.defense = (armorEnemy[0]?.defense) + (armorEnemy[1]?.defense) + (armorEnemy[2]?.defense) + (armorEnemy[3]?.defense);

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
        attacker = hero;
        defender = enemy;
    } else {
        attacker = enemy;
        defender = hero;
    }

    console.log(hero.defense);
    console.log(enemy.defense);
    console.log(hero.job.spellBook);
    console.log(enemy.job.spellBook);

    const battle = new Battle(attacker, defender);
    attacker.beforeBattle();
    defender.beforeBattle();

    while (attacker.sante > 0 && defender.sante > 0) {
        battle.turn();
    }

    rl.close();
}

main();
