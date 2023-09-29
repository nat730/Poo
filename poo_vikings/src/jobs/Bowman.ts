import { Character } from "../Character";
import { CharacterType } from "../CharacterType";

export class Bowman extends CharacterType {
    trapPut = false;
    trapDamage = 0;

    constructor() {
        super("Archer", 15, 2, 3, 1, 10, 5);
    }

    triggerBeforeBattle(attacker: Character, defender: Character) {
        if (attacker.vitesse >= defender.vitesse) {
            this.trapDamage = ((attacker.force + attacker.arme.degats) * 2.5) - defender.defense;
            console.log(`${attacker.nom} pose un piège et inflige ${this.trapDamage} points de dégâts.`);
            this.trapPut = true;
        }
    }

    triggerBeforeAttack(defender: Character) {
        if (this.trapPut) {
            defender.sante -= this.trapDamage;
            console.log('Le piège inflige ' + this.trapDamage + ' points de dégâts.');
            console.log('La santé du défenseur passe à ' + defender.sante + ' points de vie.');
        }
    }

    triggerAttack(attacker: Character, defender: Character) {
    }

    triggerTurnEnd(character: Character, damage: number) {
    }
}
