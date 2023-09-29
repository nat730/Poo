import { Character } from "../Character";
import { CharacterType } from "../CharacterType";

export class Thief extends CharacterType {

    constructor() {
        super("Voleur", 15, 2, 5, 1, 10, 13)
    }

    triggerBeforeBattle(character: Character) {
    }

    triggerBeforeAttack(thief: Character) {
    let critDamage = 2.5;    
    }

    triggerAttack(attacker: Character, defender: Character) {
        }
    

    triggerTurnEnd(thief: Character,damage:number) {
        if (thief.isCrit) {
            thief.hasActed = false;
        }
        thief.latestDamage = damage

    }

    
}
