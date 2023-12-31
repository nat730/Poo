import { Character } from "./Character";

export class Battle {
    private attacker: Character;
    private defender: Character;

    constructor(character1: Character, character2: Character) {
        this.attacker = character1;
        this.defender = character2;
    }

    public turn() {
        this.attacker.hasActed = false;
        this.attacker.beforeAttack();
        const isCritical = this.attacker.isCritical;
        const damage = this.calculateDamage(this.attacker, this.defender);
        this.applyDamage(this.attacker, this.defender, damage, isCritical);
        this.attacker.attack(this.defender);
        this.attacker.onTurnEnd();
        if (this.attacker.hasActed) {
            [this.attacker, this.defender] = [this.defender, this.attacker];
            this.attacker.hasActed = false;
        }
    }
    
    private calculateDamage(attacker: Character, defender: Character): number {
        const baseDamage = attacker.force + attacker.arme.degats - defender.defense;
        const damageMultiplier = attacker.isCritical ? attacker.critDamage : 1;
        return baseDamage * damageMultiplier;
    }
    

    private applyDamage(attacker: Character, defender: Character, damage: number, isCritical: boolean): void {
        if (damage > 0) {
            if (isCritical) {
                console.log(`${attacker.nom} fait un coup critique !`);
            }
            console.log(`${attacker.nom} attaque ${defender.nom} et inflige ${damage} points de dégâts.`);

            defender.sante -= damage;
            attacker.hasActed = true;

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