import { Character } from './Character';

export abstract class Spell {
    private _name: string;
    private _manaCost: number;
    private _character: Character;
    private _damage?: number;
    private _heal?: number;

    constructor(name: string, manaCost: number, character: Character, damage?: number, heal?: number) {
        this._name = name;
        this._manaCost = manaCost;
        this._character = character;
        this._damage = damage;
        this._heal = heal;
    }

    get name() {
        return this._name;
    }

    get manaCost() {
        return this._manaCost;
    }

    public abstract canCast(): boolean;

    public cast(): void {
        if (this.canCast()) {
            console.log(`${this._character.nom} casts a ${this._name}.`);
            this._character.mana -= this._manaCost;
            this.performSpellEffect();
            this._character.hasActed = true;
        } else {
            console.log(`${this._character.nom} cannot cast ${this._name}.`);
        }
    }

    abstract performSpellEffect(): void;
}
