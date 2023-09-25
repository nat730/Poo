import { Character } from "./Personnage";

export class Battle {
    private character1: Character;
    private character2: Character;

    constructor(character1: Character, character2: Character) {
        this.character1 = character1;
        this.character2 = character2;
    }

    private calculateDamage(attacker: Character, defender: Character, isCritical: boolean): number {
        const baseDamage = attacker.force + attacker.arme.degats - defender.defense;
        if (attacker.job.type === "Voleur") {
            return isCritical ? baseDamage * 2.5 : baseDamage;
        } else {
            return isCritical ? baseDamage * 2 : baseDamage;
        }
    }
    
    private trap(character: Character): void {
        let trapDamage = ((character.force + character.arme.degats) * 2.5) - this.character2.defense;
        if (character.job.type === "Chevalier") {
            trapDamage = trapDamage * 0.75;
        }
        console.log(`${character.nom} pose un piège et inflige ${trapDamage} points de dégâts.`);
        character.sante -= trapDamage;
    }

    private regenMana(character: Character): void {
        if (character.job.type === "Magicien" && character.mana < character.manaMax) {
            const manaRegen = character.intelligence * 0.5;
            character.mana += manaRegen;
            if (character.mana > character.manaMax) {
                character.mana = character.manaMax;
            }
            console.log(`${character.nom} régénère ${manaRegen} points de mana.`);
        }
    }

    private applyDamage(attacker: Character, defender: Character, damage: number, isCritical: boolean): void {
        if (damage > 0) {
            if (isCritical) {
                console.log(`${attacker.nom} fait un coup critique !`);
            }
            console.log(`${attacker.nom} attaque ${defender.nom} et inflige ${damage} points de dégâts.`);
            
            if (attacker.job.type === "Chevalier") {
                damage = damage * 0.75;
            }
    
            defender.sante -= damage;
            if (defender.sante < 0) {
                defender.sante = 0;
            }
            console.log(`${defender.nom} a maintenant ${defender.sante} points de vie.`);
    
            if (attacker.job.type === "Viking") {
                const pointsDeVieVoles = damage * 0.15;
                if (attacker.sante < attacker.santemax) {
                    attacker.sante += pointsDeVieVoles;
                    console.log(`${attacker.nom} vole ${pointsDeVieVoles} points de vie.`);
                    console.log(`${attacker.nom} a maintenant ${attacker.sante} points de vie.`);
                }
            }
        } else {
            console.log(`${attacker.nom} attaque ${defender.nom}, mais ${defender.nom} bloque l'attaque.`);
            if (defender.sante > 0) {
                console.log(`${defender.nom} a toujours ${defender.sante} points de vie.`);
            }
        }
    }

    private activateTrap(character: Character): void {
        if (
            (character.job.type === "Archer") && character.vitesse > this.character2.vitesse
        ) {
            this.trap(character);
        }
    }

    public simulateBattle(): string {
        let attacker: Character;
        let defender: Character;

        if (this.character1.vitesse < this.character2.vitesse) {
            attacker = this.character1;
            defender = this.character2;
        } else {
            attacker = this.character2;
            defender = this.character1;
        }

        this.activateTrap(attacker);
        this.regenMana(attacker);

        while (attacker.sante > 0 && defender.sante > 0) {
            const isCritical = Math.random() < attacker.chanceCoupCritique;
            const degatsInfliges = this.calculateDamage(attacker, defender, isCritical);

            this.applyDamage(attacker, defender, degatsInfliges, isCritical);
            if (attacker.job.type === "Voleur" && isCritical) {
                this.regenMana(attacker);
                [attacker, defender] = [attacker, defender];
            }
            else {
                [attacker, defender] = [defender, attacker];
            }
        }

        if (this.character1.sante <= 0) {
            console.log(`${this.character1.nom} est vaincu.`);
            return this.character2.nom;
        } else {
            console.log(`${this.character2.nom} est vaincu.`);
            return this.character1.nom;
        }
    }
}
