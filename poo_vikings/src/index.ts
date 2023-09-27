import { Character } from './Character';
import { SpellBook } from './SpellBook';
import { Armurerie } from './armurerie';
import * as readline from 'readline';
import { getJobFromString, FormatJobInput } from './characterutils';
import { Battle } from './battle';
import { Wizard } from './magicien';

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

                if (hero.job.type === "Magicien" && hero.job instanceof Wizard) {
                    const magicien = hero.job;
                    if ('initSpellBook' in magicien) {
                        const newSpellBook = new SpellBook(hero);
                        magicien.initSpellBook(newSpellBook);
                    }
                    const spells = magicien.spellBook!.getSpells();
                    console.log(`Sorts du magicien : ${spells.map(spell => spell.name).join(', ')}`);
                }
                

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
            console.log(hero.job);
            
            const battle = new Battle(hero, enemy);
            const winner = battle.simulateBattle();
            console.log(`Le gagnant est : ${winner}`);
        }
    })
    .catch((error) => {
        console.error(`Une erreur s'est produite : ${error}`);
    });
