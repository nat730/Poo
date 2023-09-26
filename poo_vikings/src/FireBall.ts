import { Character } from './Character';
import { Battle } from './battle'; 

export class FireBall {
    private _name: string;
    private _manaCost: number;
    private _damage: number;
    private _battle: Battle;

    constructor(character: Character, battle: Battle) {
        this._name = "Fireball";
        this._manaCost = 0.35 * character.manaMax;
        this._damage = 1.75 * character.intelligence;
        this._battle = battle;
    }

    get name() {
        return this._name;
    }

    get manaCost() {
        return this._manaCost;
    }

    get damage() {
        return this._damage;
    }

    public castFireball(attacker: Character, defender: Character): void {
        if (this.canCastFireball(attacker)) {
            console.log(`${attacker.nom} casts a ${this._name}.`);
            attacker.mana -= this._manaCost;
            this._battle.applyDamage(attacker, defender, this._damage, false);
            attacker.hasActed = true;
        }
    }

    private canCastFireball(attacker: Character): boolean {
        return (
            !attacker.hasActed &&
            attacker.mana >= this._manaCost &&
            attacker.sante > 0.25 * attacker.santeMax
        );
    }
}
