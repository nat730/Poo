import { Character } from '../Character';
import { Spell } from './Spell';

export class Protect extends Spell {
    public cast(caster: Character, target: Character) {
        let protection = caster.mana * 0.30;
        target.protection += protection;
    }



    constructor() {
        super("Protect");
    }

    canCast(caster : Character): boolean {
        let manaCost = caster.mana * 0.30;
        return manaCost >= 0;
    }

}
