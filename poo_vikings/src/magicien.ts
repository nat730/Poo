// #### Le type magicien
// La capacité spéciale des magiciens et des magiciennes est l'incantation et la récupération automatique de points de mana tous les tours.
// À tous les tours les personnages de type magicien récupère la moitié de leurs intelligence en points de mana. Les sorts se lancent automatiquement dans certaines conditions. Les magiciens et les magiciennes connaissent 1 sort à la création du personnage.
// À la création d'un personnage magicien, il recoit un nom, +5 points de vie supplémentaires, +1 de force, +1 de vitesse, +5 d'intelligence 45 points de mana et +0% de chance de coup critique.

import { Arme } from "./arme";
import { Armor } from "./armure";
import { Character } from "./Personnage";

export class Magicien extends Character {
    _regenMana: boolean;
    _spell: string;

    constructor(nom: string, sante: number, force: number, defense: number, defenseBinaire: number, arme: Arme, niveau: number, experience: number, type: string, vitesse: number, intelligence: number, mana: number, chanceCoupCritique: number, santeMax: number, equipement: string, armor: Armor, regenMana: boolean, spell: string) {
        super(nom,type, arme, armor);
        this._regenMana = true;
        this._spell = spell;
        sante += 5
        force += 1
        vitesse += 1
        intelligence += 5
        mana += 45
    }

    get regenMana(): boolean {
        return this._regenMana;
    }

    set regenMana(value: boolean) {
        this._regenMana = value;
    }
}

