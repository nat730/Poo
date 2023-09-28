import { Character } from '../Character';
import { Spell } from './Spell';

export class FireBall extends Spell {

    public cast(caster: Character, target: Character) {
        let damage = caster.intelligence * 1.75;
    
        if (target.protection === 0) {
            target.sante -= damage;
        } else {
            target.protection -= damage;
            
            if (target.protection < 0) {
                target.protection = 0;
                target.sante -= Math.abs(target.protection);
            }
        }
    }
    
    constructor() {
        super("Fireball");
    }

    canCast(caster : Character): boolean {
        let manaCost = 35;  
        return caster.mana >= manaCost;
    }
}
