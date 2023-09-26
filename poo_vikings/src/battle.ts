import { Character } from "./Character";
import { FireBall } from "./FireBall";
import { Heal } from "./Heal";
import { Protect } from "./Protect";
import { Spell } from "./Spell";

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

    private trap(attacker: Character, defender: Character): void {
        let trapDamage = ((attacker.force + attacker.arme.degats) * 2.5) - defender.defense;
        if (attacker.job.type === "Chevalier") {
            trapDamage = trapDamage * 0.75;
        }
        console.log(`${attacker.nom} pose un piège et inflige ${trapDamage} points de dégâts.`);
        defender.sante -= trapDamage;
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

    applyDamage(attacker: Character, defender: Character, damage: number, isCritical: boolean): void {
        if (damage > 0) {
            if (isCritical) {
                console.log(`${attacker.nom} fait un coup critique !`);
            }
            console.log(`${attacker.nom} attaque ${defender.nom} et inflige ${damage} points de dégâts.`);

            if (defender.job.type === "Chevalier") {
                damage = damage * 0.75;
                console.log(`${defender.nom} est un chevalier, il recoit 25% de dégâts en moins.`);
                
            }

            defender.sante -= damage;
            if (defender.sante < 0) {
                defender.sante = 0;
            }
            console.log(`${defender.nom} a maintenant ${defender.sante} points de vie.`);

            if (attacker.job.type === "Viking") {
                const pointsDeVieVoles = Math.floor(damage * 0.15);
                let pointdemanaVoles = Math.floor(damage * 0.03);
                if (pointdemanaVoles > defender.mana) {
                    defender.mana = 0;
                }
                if (pointdemanaVoles < 1) {
                    pointdemanaVoles = 1;
                }
                defender.mana -= pointdemanaVoles;
                if (attacker.sante < attacker.santeMax) {
                    attacker.sante += pointsDeVieVoles;
                }

                if (attacker.mana < attacker.manaMax) {   
                    attacker.mana += pointdemanaVoles; 
                    console.log(`${attacker.nom} vole ${pointsDeVieVoles} points de vie et ${pointdemanaVoles} points de mana.`);
                    console.log(`${attacker.nom} a maintenant ${attacker.sante} points de vie et ${attacker.mana} points de mana.`);
                }
            }
        } else {
            console.log(`${attacker.nom} attaque ${defender.nom}, mais ${defender.nom} bloque l'attaque.`);
            if (defender.sante > 0) {
                console.log(`${defender.nom} a toujours ${defender.sante} points de vie.`);
            }
        }
    }

    private activateTrap(attacker: Character, defender: Character): void {
        if (attacker.job.type === "Archer" && attacker.vitesse >= defender.vitesse) {
            this.trap(attacker, defender);
        }
    }

    public simulateBattle(): string {
        let attacker: Character;
        let defender: Character;
        let voleurCanReplay = false;
        let degatsInfliges = 0;
        let latestDamage = 0;
        let isCritical = false;
    
        if (this.character1.vitesse < this.character2.vitesse) {
            attacker = this.character1;
            defender = this.character2;
        } else {
            attacker = this.character2;
            defender = this.character1;
        }
        this.activateTrap(attacker, defender);
    
        while (this.character1.sante > 0 && this.character2.sante > 0) {
            this.regenMana(attacker);
    
            let spellToCast: Spell | null = null;
    

            if (attacker.job.type === "Magicien" && attacker.mana >= 0.55 * attacker.manaMax) {
                spellToCast = new FireBall(attacker);
            } else if (attacker.job.type === "Magicien" && attacker.sante <= 0.25 * attacker.santeMax) {
                spellToCast = new Heal(attacker);
            } else if (attacker.job.type === "Magicien" && latestDamage >= 0.15 * attacker.santeMax) {
                spellToCast = new Protect(attacker);
            }
    
            if (spellToCast) {
                if (spellToCast.canCast()) {
                    console.log(`${attacker.nom} casts ${spellToCast.name}.`);
                    spellToCast.performSpellEffect();
                    attacker.mana -= spellToCast.manaCost;
                    attacker.hasActed = true;
                } else {
                    console.log(`${attacker.nom} ne peut pas lancer ${spellToCast.name}.`);
                }
            } else {
                let isCritical: boolean = Math.random() < attacker.chanceCoupCritique;
                degatsInfliges = this.calculateDamage(attacker, defender, isCritical);
                this.applyDamage(attacker, defender, degatsInfliges, isCritical);
            }
    
            if (attacker.job.type === "Voleur" && isCritical) {
                voleurCanReplay = true;
            }
    
            if (!voleurCanReplay) {
                [attacker, defender] = [defender, attacker];
                latestDamage = degatsInfliges;
            } else {
                voleurCanReplay = false;
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