import { Character } from "../Character";
import { CharacterType } from "../CharacterType";

export class Archer extends CharacterType {
    trapPut = false;
    trapDamage = 0;


    constructor() {
        super("Archer", 15, 2, 3, 1, 10, 5);
    }

    triggerBeforeBattle(attacker: Character,defender: Character) {
        if (attacker.vitesse > defender.vitesse) {
        let trapDamage = ((attacker.force + attacker.arme.degats) * 2.5) - defender.defense;
        console.log(`${attacker.nom} pose un piège et inflige ${trapDamage} points de dégâts.`);
        this.trapPut = true;
    }
}

    triggerBeforeAttack(defender: Character) {
            if (this.trapPut = true) {
                defender.sante -= this.trapDamage
                console.log('le piège inflige ${trapDamage} points de dégâts.')
                console.log('defender.health passe a ${defender.health} points de vie.')
            }

    }

    triggerAttack(attacker: Character, defender: Character) {
    }

    triggerTurnEnd(character: Character,damage: number) {
        character.latestDamage = this.trapDamage+damage
    } 
}

