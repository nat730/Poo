import { Character } from './Character';

export class Protect {
    private _name: string;
    private _manaCost: number;
    private _barrier: number;
    private _character: Character;

    constructor(character: Character) {
        this._name = "Protection spell";
        this._manaCost = 0.30 * character.manaMax;
        this._barrier = this._manaCost;
        this._character = character;
    }

    get name() {
        return this._name;
    }

    get manaCost() {
        return this._manaCost;
    }

    get barrier() {
        return this._barrier;
    }

    public castProtection(): void {
        if (this.canCastProtection()) {
            console.log(`${this._character.nom} casts a ${this._name}.`);
            this._character.mana -= this._manaCost;
            console.log(`${this._character.nom} creates a protective barrier with ${this._barrier} health points.`);
        }
    }

    private canCastProtection(): boolean {
        // Vous pouvez maintenant accéder à latestDamage via une méthode ou une propriété dans Character
        const latestDamage = this._character.getLatestDamage(); 
        return (
            !this._character.hasActed &&
            latestDamage > 0.15 * this._character.santeMax &&
            this._character.mana >= this._manaCost
        );
    }
}
