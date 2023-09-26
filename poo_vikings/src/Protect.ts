import { Character } from './Character';
import { Spell } from './Spell';

export class Protect extends Spell {
    private _attacker: Character;

    constructor(character: Character) {
        super("Protection spell", 0.30 * character.mana, character,undefined,0.30*character.mana);
        this._attacker = character;
    }

    canCast(): boolean {
        return (
            this._attacker.job.type === "Magicien" &&
            this._attacker.mana >= this.manaCost &&
            this._attacker.sante > 0.25 * this._attacker.santeMax &&
            this._attacker.latestDamage <= 0.15 * this._attacker.santeMax
        );
    }

    performSpellEffect(): void {
        const heal = 0.30 * this._attacker.manaMax;
        this._attacker.mana -= this.manaCost;
        console.log(`${this._attacker.nom} lance le sort ${this.name} le protégeant de ${heal} points de vie.`);
    }
}


