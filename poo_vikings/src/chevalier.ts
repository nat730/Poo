import { Arme } from "./arme";
import { Armor } from "./armure";
import { Character } from "./Personnage";

export class chevalier extends Character {
    _bouclier: boolean;

    constructor(nom: string, sante: number, force: number, defense: number, defenseBinaire: number, arme: Arme, niveau: number, experience: number, type: string, vitesse: number, intelligence: number, mana: number, chanceCoupCritique: number, santeMax: number, equipement: string, armor: Armor, bouclier: boolean) {
        super(nom,type, arme, armor);
    this._bouclier = true;
    sante+=40
    force+=5
    vitesse+=1
    intelligence+=1
    mana+=5
    chanceCoupCritique+=3
    }

    get bouclier(): boolean {
        return this._bouclier;
    }

    set bouclier(value: boolean) {
        this._bouclier = value;
    }
}

