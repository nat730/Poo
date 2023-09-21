import { Arme } from "./arme";
import { Armor } from "./armure";
import { Character } from "./Personnage";

export class Viking extends Character {
    volDeVie: boolean;

    constructor(nom: string, sante: number, force: number, defense: number, defenseBinaire: number, arme: Arme, niveau: number, experience: number, type: string, vitesse: number, intelligence: number, mana: number, chanceCoupCritique: number, santeMax: number, equipement: string, armor: Armor) {
        super(nom, niveau, experience, type, sante, force, vitesse, intelligence, mana, chanceCoupCritique, defense, defenseBinaire, arme, santeMax, equipement, armor);
        this.volDeVie = true;
    }
}
