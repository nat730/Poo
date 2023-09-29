import { Character } from "./Character";
import { SpellBook } from "./SpellBook";

export abstract class CharacterType {

    private _job: string;
    private _santeMaxBonus: number;
    private _forceBonus: number;
    private _vitesseBonus: number;
    private _intelligenceBonus: number;
    private _manaMaxBonus: number;
    private _chanceCoupCritiqueBonus: number;
    private _lastTurnReport: number[] = [];
    protected _spellBook?: SpellBook

    constructor(
        job: string,
        santemaxBonus: number,
        forceBonus: number,
        vitesseBonus: number,
        intelligenceBonus: number,
        manaMaxBonus: number,
        chanceCoupCritiqueBonus: number,
        SpellBook?: SpellBook
        ) {
        this._job = job;
        this._santeMaxBonus = santemaxBonus;
        this._forceBonus = forceBonus;
        this._vitesseBonus = vitesseBonus;
        this._intelligenceBonus = intelligenceBonus;
        this._manaMaxBonus = manaMaxBonus;
        this._chanceCoupCritiqueBonus = chanceCoupCritiqueBonus;
        this._spellBook = SpellBook;
    }

    abstract triggerBeforeBattle(attacker : Character,defender : Character) : any;
    abstract triggerBeforeAttack(character : Character) : any;
    abstract triggerAttack(attacker: Character, defender: Character) : any ;
    abstract triggerTurnEnd(attacker : Character, defender : number)  : any;

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

    set manaMaxBonus(manaMax: number) {
        this._manaMaxBonus = manaMax;
    }

    get manaMaxBonus() {
        return this._manaMaxBonus;
    }

    set chanceCoupCritiqueBonus(chanceCoupCritique: number) {
        this._chanceCoupCritiqueBonus = chanceCoupCritique;
    }

    get chanceCoupCritiqueBonus() {
        return this._chanceCoupCritiqueBonus;
    }

    public get lastTurnReport(): number[] {
        return this._lastTurnReport;
    }
    public set lastTurnReport(value: number[]) {
        this._lastTurnReport = value;
    }

    public get spellBook(): SpellBook | undefined {
        return this._spellBook;
    }

    public set spellBook(value: SpellBook | undefined) {
        this._spellBook = value;
    }
}
