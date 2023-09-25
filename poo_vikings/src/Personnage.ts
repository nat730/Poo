import { Arme } from "./arme";
import { Armor } from "./armure";
import {CharacterType} from "./CharacterType";  

export class Character {
    private _nom: string;
    private _job: CharacterType;
    private _niveau: number;
    private _experience: number;
    private _sante: number;
    private _santeMax: number;
    private _force: number;
    private _vitesse: number;
    private _intelligence: number;
    private _mana: number;
    private _manaMax: number;
    private _chanceCoupCritique: number;
    private _defense: number;
    private _arme: Arme;
    private _armure: Armor;

    constructor(
        nom: string,
        job: CharacterType,
        arme: Arme,
        armure: Armor
    ) {
        this._nom = nom;
        this._job = job;
        this._niveau = 1;
        this._experience = 0;
        this._santeMax = 50 + this.job.santeMaxBonus;
        this._sante = this._santeMax
        this._force = 10 + this.job.forceBonus;
        this._vitesse = 10 +this.job.vitesseBonus;
        this._intelligence = 10 + this.job.intelligenceBonus;
        this._manaMax = this.job.manaMaxBonus;
        this._mana = 50 + this._manaMax;
        this._chanceCoupCritique = 2 + this.job.chanceCoupCritiqueBonus;
        this._defense = 0;
        this._arme = arme;
        this._armure = armure;
    }

    get nom() {
        return this._nom;
    }

    set nom(nom : string) {
        this._nom = nom;
    }
    
    get job() {
        return this._job;
    } 
    get niveau() {
        return this._niveau;
    }

    set niveau(niveau : number) {
        this._niveau = niveau;
    }

    get experience() {
        return this._experience;
    }

    set experience(experience : number) {
        this._experience = experience;
    }

    get sante() {
        return this._sante;
    }

    set sante(sante : number) {
        this._sante = sante;
    }

    get force() {
        return this._force;
    }

    set force(force : number) {
        this._force = force;
    }

    get vitesse() {
        return this._vitesse;
    }

    set vitesse(vitesse : number) {
        this._vitesse = vitesse;
    }

    get intelligence() {
        return this._intelligence;
    }

    set intelligence(intelligence : number) {
        this._intelligence = intelligence;
    }

    get mana() {
        return this._mana;
    }

    set mana(mana : number) {
        this._mana = mana;
    }

    get manaMax() {
        return this._manaMax;
    }

    set manaMax(manaMax : number) {
        this._manaMax = manaMax;
    }

    get chanceCoupCritique() {
        return this._chanceCoupCritique;
    }

    set chanceCoupCritique(chanceCoupCritique : number) {
        this._chanceCoupCritique = chanceCoupCritique;
    }

    get defense() {
        return this._defense;
    }

    set defense(defense : number) {
        this._defense = defense;
    }

    get arme() {
        return this._arme;
    }

    set arme(arme : Arme) {
        this._arme = arme;
    }

    get armure() {
        return this._armure;
    }

    set armure(armure : Armor) {
        this._armure = armure;
    }

    get santemax() {
        return this._santeMax;
    }

    set santemax(santemax : number) {
        this._santeMax = santemax;
    }
}
   