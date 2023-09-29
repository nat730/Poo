import { Weapon } from "./Objets/Weapon";
import { Armor } from "./Objets/Armor";
import { Consommable } from "./Objets/Laboratory";
import { CharacterType } from "./CharacterType";
import { Thief } from "./jobs/Thief";
import { Viking } from "./jobs/Viking";

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
    private _critDamage: number;
    private _defense: number;
    private _arme: Weapon;
    private _armure: Armor[] = [];
    private _takeDamage: number;
    public latestDamage: number = 0;
    public hasActed: boolean = false;
    public isCrit: boolean = false;
    public protection: number = 0;
    public Potion: Consommable;
    public NbrPotion: number = 0;
    isCritical: boolean = false;

    constructor(nom: string, job: CharacterType, arme: Weapon, armure: Armor[]) {
        this._nom = nom;
        this._job = job;
        this._niveau = 1;
        this._experience = 0;
        this._santeMax = 50 + this._job.santeMaxBonus;
        this._sante = this._santeMax;
        this._force = 10 + this._job.forceBonus;
        this._vitesse = 10 + this._job.vitesseBonus;
        this._intelligence = 10 + this._job.intelligenceBonus;
        this._manaMax = this._job.manaMaxBonus;
        this._mana = 50 + this._manaMax;
        this._chanceCoupCritique = 2 + this._job.chanceCoupCritiqueBonus;
        this._critDamage = 2;
        this._defense = 0;
        this._arme = arme;
        this._armure = armure;
        this._takeDamage = 0;
        this.Potion = Consommable.choisirPotionAleatoire();
    }

    public beforeBattle() {
        this._job.triggerBeforeBattle(this, this);
    }

    public beforeAttack() {
        this.isCritical = this.calculateCriticalHit(this._chanceCoupCritique);
        this._job.triggerBeforeAttack(this);
    }
    
    private calculateCriticalHit(chanceCoupCritique: number): boolean {
        return Math.random() * 100 < chanceCoupCritique;
    }
    

    public attack(target: Character) {
        this._job.triggerAttack(this, target);
    }

    public onTurnEnd() {
        this._job.triggerTurnEnd(this, this._takeDamage);
        if (this.isCritical && this._job instanceof Thief) {
                this.hasActed = false;
            }

        if (this._job instanceof Viking) {
            
        }
        
        if (this.canUseHealPotion(this)) {
            this.healPotion(this);
        }
    
        if (this.canUseManaPotion(this)) {
            this.manaPotion(this);
        }
    }
    

    canUseHealPotion(character: Character): boolean {
        if (this.Potion.category === "soin") {
            return character.santeMax - character.sante > parseInt(this.Potion.effectPower);
        }
        return false;
    }

    healPotion(character: Character): void {
        if (this.canUseHealPotion(character)) {
            const healAmount = parseInt(this.Potion.effectPower);
            character.sante += healAmount;
            console.log(`${character.nom} a utilisé une potion de soin et a récupéré ${healAmount} points de vie.`);
            this.NbrPotion--;
        }
    }

    canUseManaPotion(character: Character): boolean {
        return character.manaMax - character.mana > parseInt(this.Potion.effectPower);
    }

    manaPotion(character: Character): void {
        if (this.canUseManaPotion(character)) {
            const manaAmount = parseInt(this.Potion.effectPower);
            character.mana += manaAmount;
            console.log(`${character.nom} a utilisé une potion de mana et a récupéré ${manaAmount} points de mana.`);
            this.NbrPotion--;
        }
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

    get critDamage() {
        return this._critDamage;
    }

    set critDamage(critDamage : number) {
        this._critDamage = critDamage;
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

    set arme(arme : Weapon) {
        this._arme = arme;
    }

    set armure(armure : Armor) {
        this._armure.push(armure);
    }
    

    get santeMax() {
        return this._santeMax;
    }

    set santemax(santemax : number) {
        this._santeMax = santemax;
    }

    get TakeDamage() {
        return this._takeDamage;
    }

    set TakeDamage(TakeDamage : number) {
        this._takeDamage = TakeDamage;
    }

}
   
