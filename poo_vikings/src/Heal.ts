import { Character } from './Character';
import { Spell } from './Spell';

export class Heal extends Spell{
    private _attacker: Character;

    constructor(character: Character) {
        super("Soins magiques", 20, character,undefined,0.75 * character.intelligence);
        this._attacker = character;
    }

    public canCast(): boolean {
        return (
            this._attacker.job.type === "Magicien" &&
            this._attacker.sante <= 0.25 * this._attacker.santeMax
        );
    }
    performSpellEffect(): void {
        const heal = 0.75 * this._attacker.intelligence;
        console.log(`${this._attacker.nom} lance le sort ${this.name} se soignant de ${heal} points de vie.`);
    }
}