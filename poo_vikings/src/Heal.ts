import { Character } from './Character';

export class Heal {
    private _nom: string;
    private _coutMana: number;
    private _soins: number;

    constructor(character: Character) {
        this._nom = "Soins magiques";
        this._coutMana = 20;
        this._soins = character.intelligence * 0.75;
    }

    get nom() {
        return this._nom;
    }

    get coutMana() {
        return this._coutMana;
    }

    get soins() {
        return this._soins;
    }


    public castHealing(attacker: Character): void {
        if (this.canCastHealing(attacker)) {
            console.log(`${attacker.nom} casts a healing spell.`);
            const manaCost = 0.20 * attacker.manaMax;
            attacker.mana -= manaCost;
            const healing = 0.75 * attacker.intelligence;
            attacker.sante += healing;
            if (attacker.sante > attacker.santeMax) {
                attacker.sante = attacker.santeMax;
            }
            console.log(`${attacker.nom} regains ${healing} sante points.`);
        }
    }

    
    private canCastHealing(attacker: Character): boolean {
        return (
            !attacker.hasActed &&
            attacker.mana >= 0.20 * attacker.manaMax &&
            attacker.sante < 0.25 * attacker.santeMax 
                );
    }


}