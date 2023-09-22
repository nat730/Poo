import { Arme } from "./arme";
import { Armor } from "./armure";
import { CharacterType } from "./CharacterType";

export class Viking extends CharacterType {
    private _volDeVie: boolean;

    constructor(nom: string, sante: number, force: number, defense: number, defenseBinaire: number, arme: Arme, niveau: number, experience: number, type: string, vitesse: number, intelligence: number, mana: number, chanceCoupCritique: number, santeMax: number, equipement: string, armor: Armor) {
        super(type, santeMax, force, vitesse, intelligence, mana, chanceCoupCritique);
        this._volDeVie = true;
        sante+=25
        force+=4
        vitesse+=2
        intelligence=0
        mana=0
        chanceCoupCritique+=8
    }

    get volDeVie(): boolean {
        return this._volDeVie;
    }

    set volDeVie(value: boolean) {
        this._volDeVie = value;
    }

}


