import { Character } from "../Character";
import { CharacterType } from "../CharacterType";

export class Knight extends CharacterType {

    constructor() {
        super("Chevalier", 40, 5, 1, 1, 5, 3);
    }

    triggerBeforeBattle(character: Character) {
    }
    triggerBeforeAttack(character: Character) {
        character.TakeDamage=character.TakeDamage*0.75
    }
    triggerAttack(attacker: Character, defender: Character) {
    }
    triggerTurnEnd(character: Character,damage: number) {
    }

    
}