import { Arme } from "./arme";
import { Armor } from "./armure";
import { Character } from "./Personnage";

export class Viking extends Character {
    private _volDeVie: boolean;

    constructor(nom: string, sante: number, force: number, defense: number, defenseBinaire: number, arme: Arme, niveau: number, experience: number, type: string, vitesse: number, intelligence: number, mana: number, chanceCoupCritique: number, santeMax: number, equipement: string, armor: Armor) {
        super(nom,type, arme, armor);        
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


