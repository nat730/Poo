import { Character } from "./Character";

export class Battle {
    private character1: Character;
    private character2: Character;
    private attacker: Character;
    private defender: Character;

    constructor(character1: Character, character2: Character) {
        if (character1.vitesse > character2.vitesse) {
            this.character1 = character1;
            this.character2 = character2;
        } else {
            this.character1 = character2;
            this.character2 = character1;
        }

        this.attacker = this.character1;
        this.defender = this.character2;
    }

    public turn() {
        this.attacker.beforeBattle();
        this.attacker.beforeAttack();
        this.attacker.attack(this.defender);
        this.attacker.onTurnEnd();
        if (this.attacker.hasActed) {
            this.attacker.hasActed = false;
            [this.attacker, this.defender] = [this.defender, this.attacker];
        }
    }

    public DamageCalc(){
        

    }
}
