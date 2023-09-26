import { Character } from './Character';
import { Spell } from './Spell';

export class FireBall extends Spell {

    private _attacker: Character;

    constructor(character: Character) {
        super("Fireball", 35, character, 1.75 * character.intelligence);
        this._attacker = character;
    }

    canCast(): boolean {
        return (
            this._attacker.job.type === "Magicien" &&
            this._attacker.mana >= this.manaCost &&
            this._attacker.sante > 0.25 * this._attacker.santeMax &&
            this._attacker.latestDamage < 0.15 * this._attacker.santeMax
        );
    }

    performSpellEffect(): void {
        const damage = 1.75 * this._attacker.intelligence;
        this._attacker.mana -= this.manaCost;
        console.log(`${this._attacker.nom} lance le sort ${this.name} infligeant ${damage} dégâts.`);
    }
}
