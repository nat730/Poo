import { Arme } from "./arme";
import { Armor } from "./armure";
import { Character } from "./Personnage";

export class Archer extends Character {
    _piege: boolean;

    constructor(nom: string, sante: number, force: number, defense: number, defenseBinaire: number, arme: Arme, niveau: number, experience: number, type: string, vitesse: number, intelligence: number, mana: number, chanceCoupCritique: number, santeMax: number, equipement: string, armor: Armor, piege: boolean) {
        super(nom,type, arme, armor);
        this._piege = true;
        sante += 15
        force += 2
        vitesse += 3
        intelligence += 1
        mana += 10
        chanceCoupCritique += 5
    }

    get piege(): boolean {
        return this._piege;
    }

    set piege(value: boolean) {
        this._piege = value;
    }
}

