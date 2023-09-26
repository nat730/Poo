import { CharacterType } from "./CharacterType";
import { SpellBook } from './spellBook';

export class Wizard extends CharacterType {
    private _spells: string[] = [];
    private _spellBook: SpellBook = new SpellBook();
    private selectedSpell: string | undefined;
    private _latestDamage: number = 0;

    constructor() {
        super("Magician", 5, 1, 1, 5, 45, 0);
        this.initSpells();
    }

    get latestDamage() {
        return this._latestDamage;
    }

    private initSpells(): void {
        const availableSpells = this._spellBook.getSpells();
        const randomIndex = Math.floor(Math.random() * availableSpells.length);
        this.selectedSpell = availableSpells[randomIndex];
        this._spellBook.addSpell(this.selectedSpell, this);
    }
}