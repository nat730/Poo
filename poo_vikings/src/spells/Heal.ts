import { Character } from '../Character';
import { Spell } from './Spell';

export class Heal extends Spell {
    public cast(caster: Character, target: Character) {
        let heal = caster.intelligence * 0.75;
        target.sante += heal;
    }



    constructor() {
        super("Heal");
    }

    canCast(caster : Character): boolean {
        let manaCost = 20;
        return caster.mana >= manaCost;
    }

}
