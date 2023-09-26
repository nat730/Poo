import { Character } from './Character';
import { FireBall } from './FireBall';
import { Protect } from './Protect';
import { Heal } from './Heal';
import { Battle } from './battle';

export class SpellBook {
    private _spells: any[] = [];

    constructor() {
        this._spells = [];
    }

    addSpell(spell: string, character: Character, battle: Battle) {
        if (spell === "Boule de feu") {
            this._spells.push(new FireBall(character, battle));
        } else if (spell === "Protection magique") {
            this._spells.push(new Protect(character));
        } else if (spell === "Soins magiques") {
            this._spells.push(new Heal(character));
        }
    }

    getSpells() {
        return this._spells;
    }

    getSpell(name: string) {
        for (let i = 0; i < this._spells.length; i++) {
            if (this._spells[i].nom == name) {
                return this._spells[i];
            }
        }
    }
}
