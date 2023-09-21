import { Arme } from "./arme";
import { Armor } from "./armure";

export class Character {
    private _nom: string;
    private _type: string;
    private _niveau: number;
    private _experience: number;
    private _sante: number;
    private _santeMax: number;
    private _force: number;
    private _vitesse: number;
    private _intelligence: number;
    private _mana: number;
    private _chanceCoupCritique: number;
    private _defense: number;
    private _arme: Arme;
    private _armure: Armor;

    constructor(
        nom: string,
        type: string,
        arme: Arme,
        armure: Armor
    ) {
        this._nom = nom;
        this._type = type;
        this._niveau = 1;
        this._experience = 0;
        this._sante = 50;
        this._santeMax = 50;
        this._force = 10;
        this._vitesse = 10;
        this._intelligence = 10;
        this._mana = 50;
        this._chanceCoupCritique = 2;
        this._defense = 0;
        this._arme = arme;
        this._armure = armure;
    }

    Statistiques() {
    if (this._type==="viking") {
        this._sante+=25
        this._force+=4
        this._vitesse+=2
        this._intelligence+=0
        this._mana+=0
        this._chanceCoupCritique+=8
    }

    if (this._type==="archer") {
        this._sante+=15
        this._force+=2
        this._vitesse+=3
        this._intelligence+=1
        this._mana+=10
        this._chanceCoupCritique+=5
    }

    if (this._type==="chevalier") {
        this._sante+=40
        this._force+=5
        this._vitesse+=1
        this._intelligence+=1
        this._mana+=5
        this._chanceCoupCritique+=3
    }

    if (this._type==="magicien") {
        this._sante+=5
        this._force+=1
        this._vitesse+=1
        this._intelligence+=5
        this._mana+=45
    }
    }   
    
    get nom() {
        return this._nom;
    }

    set nom(nom : string) {
        this._nom = nom;
    }
    
    get type() {
        return this._type;
    }

    set type(type : string) {
        this._type = type;
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

    get santeMax() {
        return this._santeMax;
    }

    set santeMax(santeMax : number) {
        this._santeMax = santeMax;
    }
}
