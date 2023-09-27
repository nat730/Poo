import { CharacterType } from "./CharacterType";
import { SpellBook } from './SpellBook';
import { Battle } from './battle';
import { Spell } from './Spell';

export class Wizard extends CharacterType {
    private selectedSpell: Spell | null = null;
    private _latestDamage: number = 0;

    constructor() {
        super("Magicien", 5, 1, 1, 5, 45, 3);
    }

    public initSpellBook(spellBook: SpellBook) {
        this._spellBook = spellBook;
    }

    public chooseSpell(): void {
        if (this._spellBook) {
            const availableSpells = this._spellBook.getSpells();
            if (availableSpells.length > 0) {
                const randomIndex = Math.floor(Math.random() * availableSpells.length);
                this.selectedSpell = availableSpells[randomIndex];
                console.log(`${this.job} a choisi le sort ${this.selectedSpell.name}.`);
            } else {
                console.log("Aucun sort disponible à choisir (tous ont été utilisés).");
            }
        } else {
            console.log("Aucun sort disponible dans le SpellBook.");
        }

        if (this.selectedSpell) {
            if (this.selectedSpell.canCast()) {
                this.selectedSpell.cast();
            } else {
                console.log("Le sort sélectionné ne peut pas être lancé pour le moment.");
            }
        }
    }

    public startTurn(battle: Battle): void {
        this._latestDamage = 0;
        this.chooseSpell();
    }

    get latestDamage() {
        return this._latestDamage;
    }

}
