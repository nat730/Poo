import { CharacterType } from "./CharacterType";
import { SpellBook } from './SpellBook';
import { Battle } from './battle';
import { Spell } from './Spell';

export class Wizard extends CharacterType {
    private _spellBook: SpellBook | null = null;
    private selectedSpell: Spell | null = null;
    private _latestDamage: number = 0;

    constructor() {
        super("Magician", 5, 1, 1, 5, 45, 0);
    }

    // Méthode pour initialiser le SpellBook du magicien
    public initSpellBook(spellBook: SpellBook) {
        this._spellBook = spellBook;
    }

    // Méthode pour choisir un sort avant le tour du magicien
    public chooseSpell(): void {
        if (this._spellBook) {
            const availableSpells = this._spellBook.getSpells();

            if (availableSpells.length > 0) {
                const randomIndex = Math.floor(Math.random() * availableSpells.length);
                this.selectedSpell = availableSpells[randomIndex];
            }

            if (this.selectedSpell) {
                if (this.selectedSpell.canCast()) {
                    this.selectedSpell.cast();
                } else {
                    console.log("Le sort sélectionné ne peut pas être lancé pour le moment.");
                }
            }
        } else {
            console.log("Le SpellBook n'a pas été correctement initialisé.");
        }
    }

    public startTurn(battle: Battle): void {
        this._latestDamage = 0;
        this.chooseSpell();
    }

    get latestDamage() {
        return this._latestDamage;
    }

    public get spellBook(): SpellBook | null {
        return this._spellBook;
    }
}
