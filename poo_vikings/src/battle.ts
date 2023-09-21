import { Viking } from "./viking";

const CRITICAL_HIT_RATE = 0.1;
const CRITICAL_FAILURE_RATE = 0.9;

export class Battle {
    private viking1: Viking;
    private viking2: Viking;

    constructor(viking1: Viking, viking2: Viking) {
        this.viking1 = viking1;
        this.viking2 = viking2;
    }

    private calculateDamage(attacker: Viking, defender: Viking, isCritical: boolean): number {
        const baseDamage = attacker.force + attacker.arme.degats - defender.defense;
        return isCritical ? baseDamage * 2 : baseDamage;
    }

    private handleCriticalFailure(attacker: Viking, damage: number): void {
        if (Math.random() > CRITICAL_FAILURE_RATE) {
            console.log(`${attacker.nom} subit un échec critique et rate son attaque !`);
            attacker.sante -= damage;
            if (attacker.sante > 0) {
                console.log(`${attacker.nom} se blesse et perd ${damage} points de vie.`);
            }
        }
    }

    private applyDamage(attacker: Viking, defender: Viking, damage: number): void {
        if (damage > 0 && defender.defenseBinaire < damage) {
            console.log(`${attacker.nom} attaque ${defender.nom} et inflige ${damage} points de dégâts.`);
            defender.sante -= damage;

            if (attacker.arme.volDeVie) {
                const pointsDeVieVoles = damage * 0.13;
                if (defender.sante < defender.santeMax) {
                    attacker.sante += pointsDeVieVoles;
                    console.log(`${attacker.nom} vole ${pointsDeVieVoles} points de vie.`);
                }
            }
        } else {
            console.log(`${attacker.nom} attaque ${defender.nom}, mais ${defender.nom} bloque l'attaque en sacrifiant sa défense.`);
            if (defender.sante > 0) {
                console.log(`${defender.nom} a toujours ${defender.sante} points de vie.`);
            }
            defender.defense -= 1;
        }
    }

    public simulateBattle(): string {
        let attaquant: Viking | undefined;
        let defenseur: Viking | undefined;

        if (this.viking1.force < this.viking2.force) {
            attaquant = this.viking1;
            defenseur = this.viking2;
        } else {
            attaquant = this.viking2;
            defenseur = this.viking1;
        }

        while (attaquant.sante > 0 && defenseur.sante > 0) {
            const isCritical = Math.random() < CRITICAL_HIT_RATE;
            const degatsInfliges = this.calculateDamage(attaquant, defenseur, isCritical);

            this.handleCriticalFailure(attaquant, degatsInfliges);
            this.applyDamage(attaquant, defenseur, degatsInfliges);

                [attaquant, defenseur] = [defenseur, attaquant];
        }

        if (this.viking1.sante <= 0) {
            console.log(`${this.viking1.nom} est vaincu.`);
            return this.viking2.nom;
        } else {
            console.log(`${this.viking2.nom} est vaincu.`);
            return this.viking1.nom;
        }
    }
}
