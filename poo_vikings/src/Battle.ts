import { Character } from "./Character";

export class Battle {
    private attacker: Character;
    private defender: Character;

    constructor(character1: Character, character2: Character) {
        this.attacker = character1;
        this.defender = character2;
    }

    public turn() {
        this.attacker.beforeBattle();
        this.attacker.beforeAttack();
        const damage = this.calculateDamage(this.attacker, this.defender, false);
        this.applyDamage(this.attacker, this.defender, damage, false);
        this.attacker.onTurnEnd();
        if (this.attacker.hasActed) {
            this.attacker.hasActed = false;

            let temp : Character = this.attacker;
            this.attacker = this.defender;
            this.defender = temp;
        }
    }

    private calculateDamage(attacker: Character, defender: Character, isCritical: boolean): number {
        const baseDamage = attacker.force + attacker.arme.degats - defender.defense;
        const damageMultiplier = isCritical ? attacker.critDamage : 1;
        return baseDamage * damageMultiplier;
    }

    private applyDamage(attacker: Character, defender: Character, damage: number, isCritical: boolean): void {
        if (damage > 0) {
            if (isCritical) {
                console.log(`${attacker.nom} fait un coup critique !`);
            }
            console.log(`${attacker.nom} attaque ${defender.nom} et inflige ${damage} points de dégâts.`);

            defender.sante -= damage;

            if (defender.sante < 0) {
                defender.sante = 0;
            }

            console.log(`${defender.nom} a maintenant ${defender.sante} points de vie.`);

        } else {
            console.log(`${attacker.nom} attaque ${defender.nom}, mais ${defender.nom} bloque l'attaque.`);

            if (defender.sante > 0) {
                console.log(`${defender.nom} a toujours ${defender.sante} points de vie.`);
            }
        }
    }
}
