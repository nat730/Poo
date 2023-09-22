export class CharacterType {
    private _job: string;
    private _santeMaxBonus: number;
    private _forceBonus: number;
    private _vitesseBonus: number;
    private _intelligenceBonus: number;
    private _manaBonus: number;
    private _chanceCoupCritiqueBonus: number;

    constructor(
        job: string,
        santemaxBonus: number,
        forceBonus: number,
        vitesseBonus: number,
        intelligenceBonus: number,
        manaBonus: number,
        chanceCoupCritiqueBonus: number
        ) {
        this._job = job;
        this._santeMaxBonus = santemaxBonus;
        this._forceBonus = forceBonus;
        this._vitesseBonus = vitesseBonus;
        this._intelligenceBonus = intelligenceBonus;
        this._manaBonus = manaBonus;
        this._chanceCoupCritiqueBonus = chanceCoupCritiqueBonus;
       
    }

    set job(job: string) {
        this._job = job;
    }

    get type() {
        return this._job;
    }

    set santeMaxBonus(santemax: number) {
        this._santeMaxBonus = santemax;
    }

    get santeMaxBonus() {
        return this._santeMaxBonus;
    }

    set forceBonus(force: number) {
        this._forceBonus = force;
    }

    get forceBonus() {
        return this._forceBonus;
    }

    set vitesseBonus(vitesse: number) {
        this._vitesseBonus = vitesse;
    }

    get vitesseBonus() {
        return this._vitesseBonus;
    }

    set intelligenceBonus(intelligence: number) {
        this._intelligenceBonus = intelligence;
    }

    get intelligenceBonus() {
        return this._intelligenceBonus;
    }

    set manaBonus(mana: number) {
        this._manaBonus = mana;
    }

    get manaBonus() {
        return this._manaBonus;
    }

    set chanceCoupCritiqueBonus(chanceCoupCritique: number) {
        this._chanceCoupCritiqueBonus = chanceCoupCritique;
    }

    get chanceCoupCritiqueBonus() {
        return this._chanceCoupCritiqueBonus;
    }

}
