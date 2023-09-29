import { Character } from "../Character";
import { CharacterType } from "../CharacterType";

export class Thief extends CharacterType {
    critDamage: number = 2.5;
    constructor() {
        super("Voleur", 15, 2, 5, 1, 10, 13);
        
    }

    triggerBeforeBattle(character: Character) {
    }

    triggerBeforeAttack(thief: Character) {
    }

    triggerAttack(attacker: Character, defender: Character) {
    }

    triggerTurnEnd(thief: Character, damage: number) {
    }
}
