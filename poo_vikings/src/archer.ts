import { Arme } from "./arme";
import { Armor } from "./armure";
import { CharacterType } from "./CharacterType";

export class Archer extends CharacterType {
    _piege: boolean;

    constructor(nom: string, sante: number, force: number, defense: number, defenseBinaire: number, arme: Arme, niveau: number, experience: number, type: string, vitesse: number, intelligence: number, mana: number, chanceCoupCritique: number, santeMax: number, equipement: string, armor: Armor, piege: boolean) {
        super(type, santeMax, force, vitesse, intelligence, mana, chanceCoupCritique);
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

